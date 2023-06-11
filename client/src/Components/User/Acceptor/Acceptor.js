import React, { useRef ,useMemo} from 'react'
import { Route, Routes ,Link} from "react-router-dom";
import { useState } from 'react';
import { Button } from 'bootstrap';
import {useForm} from 'react-hook-form'
import BloodBankTable from './BloodBankTable';
import Navbar from '../UserNavBar/Navbar';
function Acceptor() {

  const [page, setPage] = useState(true)
  const [bloodgroup, setBloodGroup] = useState("")
  const [place, setPlace] = useState("")
  const [request, setRequest] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  let API_MAP =""
  const onFormSubmit = (userCredObj) => {
 
    console.log(bloodgroup , place)
  }

  let blooddata = [
  {
    bloodbankname :"blood bank1",
    contactNo: "0870-2579118", 
    area:"warangal",
    stock :{
      A_pos :20,
      A_neg: 5,
      B_pos:10,
      B_neg:2
    }
  },
  {
    bloodbankname :"blood bank2",
    contactNo: "040-2579118", 
    area:"hyderabad",
    stock :{
      A_pos :5,
      A_neg: 15,
      B_pos:20,
      B_neg:12
    }

  }
  ]
  const sendRequest = () => {
    // Logic for sending the request goes here
    console.log('Sending request...');
    setRequest(true)
    alert("Request sent to all the donors and NGOS, Please be patient")
    
  };



  return (
    <div>
       <Navbar/>
        {/* <Sidebar className='' /> */}
        
        <div className='row mt-5'>

            <div className='col-md-2 mt-5 '>

              <div className='d-flex flex-column gap-5'>

                <button className='btn btn-danger w-100' onClick={()=>{setPage(true)}}>

                    Request Blood 

                </button>

                <button className='btn btn-danger w-100' onClick={()=>{setPage(false)}}>

                    My Requests

                </button>


              </div>


            </div>
      <div className='col-md-10'>
        
        

    {
       request===false ?
    <>
        {page===true &&
        <div className='mx-3'>

            <form onSubmit={handleSubmit(onFormSubmit)}>
             <select className="option w-25 p-2 dropdown me-3" onChange={(e) => {setBloodGroup(e.target.value);}} >
              <option selected value='' active>Select Blood type</option>
              <option  value="A_pos">A+</option>
              <option  value="B_pos">B+</option>
              <option  value="B_neg">B-</option>
              <option  value="A_neg">A-</option>
              <option  value="AB_neg">AB-</option>
              <option  value="AB_pos">AB+</option>
              <option  value="O_pos">O+</option>
              <option  value="O_neg">O-</option>
                                            
              </select>

              <select className="option w-25 p-2 dropdown" onChange={(e) => {setPlace(e.target.value);}}>
              <option selected value='' >Select Place </option>
              <option  value="Hyderabad">Hyderabad</option>
              <option  value="Warangal">Warangal</option>
              <option  value="Karimnagar">Karimnagar</option>
              <option  value="Nizamabad">Nizamabad</option>
                                                         
              </select>

              
              <button type='submit ' className='btn btn-danger mx-3'>Submit</button>


              </form>

            {/* map  */}
            <div className='map w-50'>
              {/* <Maps/> */}

              </div>

            {/* display table data */}

            {place !== "" && bloodgroup !== "" && (
              <BloodBankTable area={place} bloodType={bloodgroup} data={blooddata}   onRequest={sendRequest}/>
            )}


          </div>
        }

        {page===false &&
        <div className='mx-3'>
      <h2>Previous Requests</h2>
        <div className='px-3 py-2 d-flex flex-column gap-3'>
          
       

          
          <div className='w-75 p-3 bg-light'>
          1.<p>Blood Group Type : B+</p> <br/>
          <p>Blood Bank Approached : Blood Bank 1 </p> <br/>
          <p>Area : Hyderbad</p> <br/>
          </div>

          <div className='w-75 p-3 bg-light'>
          2.<p>Blood Group Type : B+</p> <br/>
          <p>Blood Bank Approached : Blood Bank 1 </p> <br/>
          <p>Area : Hyderbad</p> <br/>
          </div>
          <div className='w-75 p-3 bg-light'>
          3.<p>Blood Group Type : B+</p> <br/>
          <p>Blood Bank Approached : Blood Bank 1 </p> <br/>
          <p>Area : Hyderbad</p> <br/>
          </div>
          </div>

        </div>  
        }
    </>
      :
      <>
      Request placed
      </>
}


      </div>



        </div>
         
          
       
         
    </div>
  )
}

export default Acceptor