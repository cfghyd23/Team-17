import React from 'react'
import Navbar from './UserNavBar/Navbar'
import image1 from '../../images/mission2035.jpg'
function UserHome() {
  return (
    <div>
        <Navbar/>
        <img src={image1} className='mx-auto p-5 text-center d-block'/> 
       
    </div>
  )
}

export default UserHome