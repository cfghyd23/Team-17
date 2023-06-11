import React, { useState } from 'react'
import Navbar from './User/UserNavBar/Navbar'

function Donate() {



    const [money, setMoney] = useState(0);
  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    console.log("hello")
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "",
      currency: "INR",
      amount: amount * 100,
      name: "Vivek",
      description: "Thanks for Donating",
      image:
        "https://bloodwarriors.in/wp-content/uploads/2023/02/cropped-BWI_Icon_Pink-1-90x90.png",

      handler: function (response) {
        console.log("response",response)

        alert("Successfully Donated");
        //code to call checkout backend api
      },
      prefill: {
        name: "User A",
      },
    };

    
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  function donatehere(e) {
    let amount = e.target.value
    displayRazorpay(amount)
  }
  return (
    <div>

        <Navbar/>

        <div>
        <form className='w-50 mx-auto bg-light mt-5 pt-5 p-4' >
  {/* <!-- Name input --> */}
  <div className="form-outline mb-4 ">
  <label className="form-label" >User Name</label>
    <input type="text" id="form4Example1" className="form-control" />
    
  </div>

 
  <div className="form-outline mb-4">
  Area
    <input type="text" id="form4Example2" className="form-control" />
   
  </div>
 
  

  {/* <!-- Message input --> */}
  <div className="form-outline mb-4 mt-5">
Message or Any feedback
    <textarea className="form-control" id="form4Example3" rows="4"></textarea>
   
  </div>
  <div className="form-outline mb-4 mt-5">
  Donation in Rs.
  <input type="number" id="form4Example2" className="form-control" onChange={(e)=>{setMoney(e.target.value)}}/>
   
  </div>



  {/* <!-- Submit button --> */}
  <button type="submit" className="btn btn-primary btn-block mb-4" onClick={() => displayRazorpay(money)}>Donate Money</button>
</form>
            

        </div>




    </div>
  )
}

export default Donate