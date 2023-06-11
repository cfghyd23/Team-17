import React, { useState } from 'react'
import Acceptor from './Acceptor/Acceptor'
import Donor from './Donor/Donor'
import Navbar from './UserNavBar/Navbar'
import { Route, Routes ,Link} from "react-router-dom";
function User() {

    
    
  return (
    <div>
        <Navbar/>
        <Routes>
      {/* <Route path="/acceptorhome" element={<Acceptor />} /> */}
       <Route path="/donorpage" element={<Donor />} />
       <Route path="/acceptorpage" element={<Acceptor />} />
       <Route path="/donorhome" element={<Donor />} />
      </Routes>

    </div>
  )
}

export default User