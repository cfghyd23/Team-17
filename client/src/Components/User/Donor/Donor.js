import React from 'react'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './Donor.css'
import BloodBankTable from './BloodBankTable'
import GoogleMapReact from 'google-map-react';
import Navbar from '../UserNavBar/Navbar';


function Donar() {

     
  const [page, setPage] = useState(true)
  const [bloodgroup, setBloodGroup] = useState("")
  const [place, setPlace] = useState("")
  const [enable,setEnable]=useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  let API_MAP =""
  const onFormSubmit = (userCredObj) => {
 
    console.log(bloodgroup , place)
   

  }
  const apiKey = '';

 
  const center = {
    lat: 17.3850,
    lng: 78.4867,
  };


  const zoom = 10;
  let data=[
    {
      name:"Blood bank1",
      area: "Subash Nagar",
      place:"Karimnagar"
    },
    {
      name:"Blood bank2",
      area: "Housing board colony",
      place:"Karimnagar"
    },
    {
      name:"Blood bank3",
      area: "Bagath Nagar",
      place:"Karimnagar"
    },
    {
      name:"Blood bank4",
      area: "Rama Nagar",
      place:"Nizamabad"
    },
    {
      name:"Blood bank5",
      area: "Pochamaidhan",
      place:"Warangal"
    },

  ]



  //maps


  return (
    
     
    
    <div>
       
       <Navbar/>
        
        <div className='row mt-5'>

            <div className='col-md-2 mt-5 '>

              <div className='d-flex flex-column gap-5'>

                <button className='btn btn-danger w-100' onClick={()=>{setPage(true)}}>

                    Donate Blood 

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
              <option  value="Karimnagar">Karimnagar</option>
              <option  value="Nizamabad">Nizamabad</option>
              <option  value="Kurnool">Kurnool</option>
              <option  value="Khammam">Khammam</option>
              <option  value="Nalgonda">Nalgonda</option>
              <option  value="Vizag">Vizag</option>
                                            
              </select>

              
              <button type='submit ' className='btn btn-danger mx-3' onClick={()=>{setEnable(true)}}>Submit</button>
              
              </form>
              { bloodgroup!="" && place!="" &&
        (<div>
  <div
      style={{
        height: '400px',
        width: '40%',
        margin: '20px',
        border: '1px solid #ccc',
        position:'relative',
        left:'320px',
        border:'2px solid black;'
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
        <BloodBankTable  data={data}/>
        </div>)
}

            {/* map  */}
            

            





            {/* display table data */}




          </div>
          }

{page===false &&
        <div>

          My prev request
          </div>
          }




    



      
        <br/>
       
    

</div>
  
</div> 
         
    </div>
  )
}

export default Donar