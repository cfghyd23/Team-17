import React, { useRef ,useMemo} from 'react'
import { Route, Routes ,Link} from "react-router-dom";
import { useState } from 'react';
import { Button } from 'bootstrap';
import {useForm} from 'react-hook-form'
function Acceptor() {

  const [page, setPage] = useState(true)
  const [bloodgroup, setBloodGroup] = useState("")
  const [place, setPlace] = useState("")
  const { register, handleSubmit, formState: { errors } } = useForm();
  let API_MAP =""
  const onFormSubmit = (userCredObj) => {
 
    console.log(bloodgroup , place)
   

  }



  //maps


  return (
    <div>
       
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

        {page===true &&
        <div>

            <form onSubmit={handleSubmit(onFormSubmit)}>
             <select className="option w-25 p-2 dropdown me-3" onChange={(e) => {setBloodGroup(e.target.value);}} >
              <option selected value='' active>Select Blood type</option>
              <option  value="A+">A+</option>
              <option  value="B+">B+</option>
              <option  value="B-">B-</option>
              <option  value="A-">A-</option>
              <option  value="AB-">AB-</option>
              <option  value="AB+">AB+</option>
              <option  value="O+">O+</option>
              <option  value="O-">O-</option>
                                            
              </select>

              <select className="option w-25 p-2 dropdown" onChange={(e) => {setPlace(e.target.value);}}>
              <option selected value='' >Select Place </option>
              <option  value="Hyderabad">Hyderabad</option>
              <option  value="Warangal">Warangal</option>
              <option  value="Karimnagar">B-</option>
              <option  value="Nizamabad">A-</option>
              <option  value="">AB-</option>
              <option  value="AB+">AB+</option>
              <option  value="O+">O+</option>
              <option  value="O-">O-</option>
                                            
              </select>

              
              <button type='submit ' className='btn btn-danger mx-3'>Submit</button>
              </form>

            {/* map  */}
            <div className='map w-50'>

              </div>







            {/* display table data */}




          </div>
          }

{page===false &&
        <div>

          My prev request
          </div>
          }




      </div>



        </div>
         
          
       
         
    </div>
  )
}

export default Acceptor