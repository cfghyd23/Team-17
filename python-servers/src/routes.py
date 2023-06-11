from .utils import getRecordings, getResults, extract_json, OpenAIChatCompletion
from twilio.rest import Client
import os

ACCOUNT_SID = os.getenv("ACCOUNT_SID")
AUTH_TOKEN = os.getenv("AUTH_TOKEN")
TWILIO_NUMBER = os.getenv("TWILIO_NUMBER")
TO_NUMBER = os.getenv("TO_NUMBER")

client = Client(ACCOUNT_SID, AUTH_TOKEN)


TWIML_TEMPLATE = """
<Response>
    <Say>Hello! welcome to blood donation service.</Say>
    <Say>Do you want to donate blood for look for a donor?</Say>
    <Record maxLength="5"/>
    <Say>Please mention you blood type</Say>
    <Record maxLength="5"/>
    <Say>Please mention you location.</Say>
    <Record maxLength="5"/>
    <Say>Thank you for the call. You will be receiving a message from us shortly.</Say>
</Response>
"""

# TWIML_TEMPLATE = """
# <Response>
#     <Say language="hi-IN">नमस्ते! रक्तदान सेवा में आपका स्वागत है।</Say>
#     <Say language="hi-IN">क्या आप रक्तदान करना चाहते हैं या दानकर्ता की तलाश करना चाहते हैं?</Say>
#     <Record maxLength="5"/>
#     <Say language="hi-IN">कृपया अपने रक्त का प्रकार उल्लेख करें।</Say>
#     <Record maxLength="5"/>
#     <Say language="hi-IN">कृपया अपना स्थान उल्लेख करें।</Say>
#     <Record maxLength="5"/>
#     <Say language="hi-IN">आपके कॉल के लिए धन्यवाद। आपको हमारी तरफ से शीघ्र ही एक संदेश मिलेगा।</Say>
# </Response>
# """

def call_route():
    call = client.calls.create(
        record=True,
        recording_channels="dual",
        twiml=TWIML_TEMPLATE,
        to=TO_NUMBER,
        from_=TWILIO_NUMBER
    )
        
    def returnStatus(call):
        status = client.calls.get(call).fetch().status
        print("status", status)
        return status != 'queued' and status != 'ringing' and status != 'in-progress'

    while True:
        status = returnStatus(call.sid)
        if status:
            break
        
    paths = getRecordings(client, [call.sid])
    result = getResults(paths)
    json = extract_json(result)
    print(json)
    
    return json

def get_chat(question):
    return OpenAIChatCompletion(question)