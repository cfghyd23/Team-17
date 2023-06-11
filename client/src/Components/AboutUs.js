import React,{useState} from 'react'
import Navbar from './User/UserNavBar/Navbar'

function AboutUs() {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (expandedQuestion === questionIndex) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(questionIndex);
    }
  };

  const questions = [
    {
      question: "Will it hurt when you insert the needle?",
      answer: 'Only for a moment. Pinch the fleshy, soft underside of your arm. That pinch is similar to what you will feel when the needle is inserted.' 
    },
    {
      question: 'How long does a blood donation take?',
      answer: 'The entire process takes about one hour and 15 minutes; the actual donation of a pint of whole blood unit takes eight to 10 minutes. However, the time varies slightly with each person depending on several factors including the donor’s health history and attendance at the blood drive.',
    },
    {
      question: 'How long will it take to replenish the pint of blood I donate?',
      answer: 'The plasma from your donation is replaced within about 24 hours. Red cells need about four to six weeks for complete replacement. That’s why at least eight weeks are required between whole blood donations.',
    },
    {
      question: 'Why does the Red Cross ask so many personal questions when I give blood?',
      answer: 'The highest priorities of the Red Cross are the safety of the blood supply and our blood donors. Some individuals may be at risk of transferring communicable disease through blood donation due to exposure via travel or other activities or may encounter problems with blood donation due to their health. We ask these questions to ensure that it is safe for patients to receive your blood and to ensure that it is safe for you to donate blood that day.',
    },
    {
      question: 'How often can I donate blood?',
      answer: 'You must wait at least eight weeks (56 days) between donations of whole blood and 16 weeks (112 days) between Power Red donations. Whole blood donors can donate up to 6 times a year. Platelet apheresis donors may give every 7 days up to 24 times per year. Regulations are different for those giving blood for themselves (autologous donors).',
    },
    {
      question: 'Who can donate blood?',
      answer: 'In most states, donors must be age 17 or older. Some states allow donation by 16-year-olds with a signed parental consent form. Donors must weigh at least 110 pounds and be in good health. Additional eligibility criteria apply.',
    },
    {
      question: 'Can I bring guests or children with me to my donation appointment?',
      answer: 'At this time, we are allowing additional guests or children to accompany donors to their donation appointment. Guests are expected to follow any safety protocols in place at the time of donation. The safety of our donors, volunteers, and employees is of the utmost importance.  Children who do not require supervision and are not disruptive are welcome to sit in the waiting or refreshment area.  If they require supervision another adult must be present.',
    },
  ];
  return (
    
    
  
        <>
    <Navbar/>
    <br/>
      <div className="container-fluid">
     
     <div className='add'>
      <h1 className='my-5 '>FAQs</h1>
      <hr/>
      {questions.map((q, index) => (
      <div className="question" key={index} onClick={() => toggleQuestion(index)}>
        <h4>
          {q.question}<span className='mx-3'></span> {expandedQuestion === index ? "-" : "+"}
        </h4>
        {expandedQuestion === index && <div className="answer">{q.answer}</div>}
      </div>
    ))}
   
      </div>
      <br/>
      <style>
        {`
        .container-fluid{
          width:75%;
         
        }
        .add{
          border:2px solid black
        }
          
         h1{
          text-align:center;
         }

         
          .question {
            cursor: pointer;
            border-bottom: 1px solid #ccc;
            padding: 10px;
            background-color: #f9f9f9;
            
          }

          .answer {
            display: block;
            padding: 10px;
          }
        `}
      </style>
    </div>
    </>


  )
}

export default AboutUs