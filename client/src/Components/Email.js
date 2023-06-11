import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';




function Email() {

  const [emailAlert, setAlert] = useState('')
  const form = useRef();
  let serviceID = "service_2x3bv6p";
  let publicID = ""
  let templateID = "template_hf2t5yu"
  let publicKey = ''
  var templateParams = {
    to_name: 'Shiva Teja',
    to_email: '@gmail.com',
    from_name :"Vivek",
    message:"Hi ra topper Shiva"
};


    //for sms from twilio from only server.js

    //import twilio from "twilio";

    // const accountSid = "ACcfc7b640a5a2e10a5314a0dc94fcd185";
    // const authToken = "";
    //const client = twilio(accountSid, authToken);
//     client.messages
//         .create({
//      body: 'Hi Vivek',
//      from: '+12707517348',
//      to: '+919000976555'
//    })
//   .then(message => console.log(message.sid+ "message sent"));


  const sendEmail = () => {
    emailjs.send(serviceID, templateID, templateParams,publicKey)
    .then(function(response) {
       console.log('SUCCESS! Email Sent', response.status, response.text);

       setAlert("Email Sent to "+ templateParams.to_email);
        setTimeout(()=> {
           setAlert('')
        }, 1000);
    }, function(error) {
       console.log('FAILED...', error);
    });
    


  };

  return (
    <div>
      <button onClick={sendEmail}>Send Email</button>

      {

                 emailAlert &&   
                <p class="alert alert-primary p-1 mt-5 w-25 p-3 mx-auto" role="alert">
                    {emailAlert} 
                </p>
               

                } 
    </div>
  );
}

export default Email;
