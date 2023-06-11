from langchain.prompts import ChatPromptTemplate, HumanMessagePromptTemplate
from langchain.output_parsers import StructuredOutputParser, ResponseSchema
from langchain.memory import ConversationBufferMemory
from langchain.prompts.prompt import PromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.llms import OpenAI
from langchain import LLMChain
from tqdm import tqdm
import requests
import openai
import os

from dotenv import load_dotenv
load_dotenv()

OPENAI_KEY = os.getenv('OPENAI_KEY')


def extract_json(result):
    chat_model = ChatOpenAI(temperature=0.2, model_name='gpt-3.5-turbo', openai_api_key=OPENAI_KEY)
    
    response_schemas = [    
        ResponseSchema(name="task", description="Task to be done, either be \"donor\" who will donate blood, or \"patient\" who will require blood"),
        ResponseSchema(name="blood_group", description="The blood group of the person"),
        ResponseSchema(name="location", description="the place where person stays")
    ]

    output_parser = StructuredOutputParser.from_response_schemas(response_schemas)
    format_instructions = output_parser.get_format_instructions()
    
    prompt = ChatPromptTemplate(
        messages=[
            HumanMessagePromptTemplate.from_template("Extract task, blood group and location, based on given context text \n\n \
                {format_instructions}\n\n \
                CONTEXT:\n \
                TASK: {task}\n \
                BLOOD GROUP: {blood_group}\n \
                LOCATION: {location}\n \
                ")  
            ],
            input_variables=["task", "blood_group", "location"],
            partial_variables={"format_instructions": format_instructions}
    )
    query = prompt.format_prompt(task=result["result"]["+919337070750"]["results"][2]["getText"],
                                 blood_group=result["result"]["+919337070750"]["results"][1]["getText"],
                                 location=result["result"]["+919337070750"]["results"][0]["getText"]
                                )
    fruit_output = chat_model(query.to_messages())
    output = output_parser.parse(fruit_output.content)

    return output

def getText(audio):
    openai.api_key = ""
    text = openai.Audio.translate("whisper-1", open(audio, 'rb'))["text"]
    return text
    
def extract_text(audio, i):
    result = {"index": i}
    try:
        text = getText(audio)
        result["getText"] = str(text)
    except Exception as e:
        print(audio, e)
    return result
    
def getResults(paths):
    for number in paths.keys():
        recordings = paths[number]["recordings"]
        if len(recordings) > 1:
            recordings = recordings[:-1]
            paths[number]["results"] = []
            for i, recording in enumerate(recordings):
                result = extract_text(recording, i)
                paths[number]["results"].append(result)
    return {"result": paths}
        
    
def getRecordings(client, calls):
    recordings_list = [[client.recordings.list(call_sid=sid), client.calls.get(sid).fetch().to] for sid in calls]
    paths = {}
    for j, recordings in tqdm(enumerate(recordings_list)):
        paths[recordings_list[j][1]] = {
            "call-sid": calls[j],
            "recordings": []
        }
        try:
            os.mkdir("./RESULTS/" + "Recordings/" + str(recordings_list[j][1]))
        except Exception as e:
            print(e)
        for i, record in enumerate(recordings[0]):
            try:
                rSID = record
                SID = rSID.sid
                url = "https://api.twilio.com/" + rSID.api_version + "/Accounts/" + rSID.account_sid + "/Recordings/" + SID + ".mp3"
                doc = requests.get(url)
                local_url = "./RESULTS/" + "Recordings/" + str(recordings_list[j][1]) + "/recording" + str(i) + ".mp3"
                with open(local_url, 'wb') as f:
                    paths[recordings_list[j][1]]["recordings"].append(local_url)
                    f.write(doc.content)
            except Exception as e:
                print("error", e)
    return paths

def OpenAIChatCompletion(question):
    template = """
    YOU ARE A OFFICIAL CHATBOT FOR A BLOOD DONATION AUTOMATION SYSTEM. YOUR WORK IS TO HELP THE USER THROUGH THE WEBSITE,
    BASIC BLOOD DONATION FACTS, AND SUPPORT USERS OF ALL AGES. AS A CHATBOT, YOU DON'T HAVE ACCESS TO PREVIOUS DATA SO
    ANSWER ACCORDINGLY.

    MORE WEBSITE DETAILS:
    
    
    
    Human: {human_input}
    Chatbot ANSWER JSON FORMAT:
    ```json
    (
        'answer': string
    )
    ```
    """

    prompt = PromptTemplate(
        input_variables=["human_input"], 
        template=template
    )
    
    llm_chain = LLMChain(
        llm=OpenAI(openai_api_key=OPENAI_KEY), 
        prompt=prompt, 
        verbose=False
    )
    
    result = llm_chain.predict(human_input=question)
    print(result)