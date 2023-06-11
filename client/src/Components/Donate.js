import React from 'react'
import Navbar from './User/UserNavBar/Navbar'

function Donate() {
  return (
    <div>

        <Navbar/>

        <div>
        <form className='w-50 mx-auto bg-light mt-5 pt-5 p-4'>
  {/* <!-- Name input --> */}
  <div class="form-outline mb-4 ">
  <label class="form-label" for="form4Example1">User Name</label>
    <input type="text" id="form4Example1" class="form-control" />
    
  </div>

  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
  <label class="form-label" for="form4Example2">Area</label>
    <input type="email" id="form4Example2" class="form-control" />
   
  </div>
 
  

  {/* <!-- Message input --> */}
  <div class="form-outline mb-4 mt-5">
  <label class="form-label" for="form4Example3">Message or Any feedback</label>
    <textarea class="form-control" id="form4Example3" rows="4"></textarea>
   
  </div>
  <div class="form-outline mb-4 mt-5">
  <label class="form-label" for="form4Example3">Donation in Rs.</label>
  <input type="number" id="form4Example2" class="form-control" />
   
  </div>



  {/* <!-- Submit button --> */}
  <button type="submit" class="btn btn-primary btn-block mb-4">Donate Money</button>
</form>
            

        </div>




    </div>
  )
}

export default Donate