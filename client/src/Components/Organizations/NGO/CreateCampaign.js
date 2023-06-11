import React, { useEffect, useState } from 'react'
import NgoNavBar from './NgoNavBar'
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
function CreateCampaign() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div>
        <NgoNavBar/>

        <form className='w-50 mx-auto bg-light mt-5 pt-5 p-4'>
  {/* <!-- Name input --> */}
  <div class="form-outline mb-4 ">
  <label class="form-label" for="form4Example1">Campaign Name</label>
    <input type="text" id="form4Example1" class="form-control" />
    
  </div>

  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
  <label class="form-label" for="form4Example2">Area</label>
    <input type="email" id="form4Example2" class="form-control" />
   
  </div>
 
  <label class="form-label" for="form4Example2">Date </label>
  <br/>
  <RangePicker />

  {/* <!-- Message input --> */}
  <div class="form-outline mb-4 mt-5">
  <label class="form-label" for="form4Example3">Description</label>
    <textarea class="form-control" id="form4Example3" rows="4"></textarea>
   
  </div>



  {/* <!-- Submit button --> */}
  <button type="submit" class="btn btn-primary btn-block mb-4">Create Campaign</button>
</form>
    </div>
  )
}

export default CreateCampaign