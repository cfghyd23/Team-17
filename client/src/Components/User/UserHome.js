import React from 'react'
import Navbar from './UserNavBar/Navbar'
import image1 from '../../images/mission2035.jpg'
import image3 from '../../images/donation.jpg'
function UserHome() {
  return (
    <div className='viv'>
        <Navbar/>
        <img src={image1} className='mx-auto  text-center d-block m-0 p-0'/> 
        

        <img src={image3} className='mx-auto text-center d-block m-0 p-0'/> 
    </div>
  )
}

export default UserHome