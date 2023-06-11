import React, { useState } from 'react';
import "./App.css"

const App = () => {
  const [textInput, setTextInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleButtonClick = () => {
    const formattedText = textInput.replace(/[\W_]+/g, '+'); // Remove punctuation marks and replace spaces with "+"
    const apiUrl = `http://127.0.0.1:5000/chatbot?question=${formattedText}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        let jsonObject = data["result"]
        .replace(/\n/g, '') // Remove newline characters
        .replace(/\{\s+/g, '{') // Remove spaces after '{'
        .replace(/\s+\}/g, '}') // Remove spaces before '}');
        console.log(jsonObject)
        setMessages([...messages, textInput, JSON.parse(jsonObject)["answer"]])
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='main-app'>
      <div className='chats'>
        {messages.map((x) => {
          return (
          <div className='single-chat'>
            {x}
          </div>)
        })}
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <input type="text" style={{width: '70%', height: '30px'}} value={textInput} onChange={handleInputChange} />
        <button style={{height: '30px'}} onClick={handleButtonClick}>Search</button>
      </div>
    </div>
  );
};

export default App;
