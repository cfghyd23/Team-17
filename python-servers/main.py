from src.routes import call_route, get_chat
from flask_cors import CORS
from flask import Flask, request

app = Flask(__name__)
CORS(app)
    
@app.route('/call')
def call():
    result = call_route()
    print(result)
    
    return result

@app.route('/chatbot')
def chatbot():
    question = request.args.get('question')
    question = question.replace("+", " ")
    result = get_chat(question)
    
    return {"result": result}
    

if __name__ == "__main__":
    app.run()