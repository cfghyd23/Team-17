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
        <h1 className="my-5 ms-5">Why do we need to donate blood ? </h1>
        <div className='mx-auto display-block text-center'><iframe width="800" height="400" src="https://www.youtube.com/embed/kOISEM6L4xk" title="Blood donation: an act of solidarity - World Blood Donor Day 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    </div>
  )
}

export default UserHome