import React from 'react'
import NgoNavBar from './NgoNavBar'
import image2 from '../../../images/blood_warriors.png'

function NgoAbout() {
  return (
    <div>
        <NgoNavBar/>
        

        <img src={image2} className='mx-auto text-center display-block ms-5 '  style={{height: "500px"}}/>
    </div>
  )
}

export default NgoAbout