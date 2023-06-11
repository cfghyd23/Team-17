import React, { useEffect, useState } from 'react'
import { Route, Routes ,Link} from "react-router-dom";
import './App.css'
import Navbar from './Components/User/UserNavBar/Navbar';
import Acceptor from './Components/User/Acceptor/Acceptor';
import Ngo from './Components/Organizations/NGO/Ngo';
import Bloodbank from './Components/Organizations/BloodBank/Bloodbank';
import Donor from './Components/User/Donor/Donor';
import User from './Components/User/User';
import AboutUs from './Components/AboutUs';
import UserHome from './Components/User/UserHome';
import AcceptorList from './Components/Organizations/BloodBank/AcceptorList';
import CreateCampaign from './Components/Organizations/NGO/CreateCampaign';
import VolunteerList from './Components/Organizations/NGO/VolunteerList';
import NgoAbout from './Components/Organizations/NGO/NgoAbout';
import DonarList from './Components/Organizations/BloodBank/DonarList';
import AppointmentList from './Components/Organizations/BloodBank/AppointmentList';
import Loader from './Loader';

function App() {
  
  

  return (

    
    <div>
    
    
    <Loader />
      
      
      <div className=''>
      <Routes>
      <Route path='/' element={<User/>}/>
      {/* <Route path="/acceptorhome" element={<Acceptor />} /> */}
      <Route path="/userhome" element={<UserHome />} />
       <Route path="/ngohome" element={<Ngo />} />
       <Route path="/bloodbankhome" element={<Bloodbank />} />
       <Route path="/donorpage" element={<Donor />} />
       <Route path="/acceptorpage" element={<Acceptor />} />
       <Route path="/createcampaign" element={<CreateCampaign />} />
       <Route path='/acceptorslist' element={<AcceptorList/>}/>
       <Route path='/donarslist' element={<DonarList/>}/>
       <Route path="/aboutus" element={<AboutUs />} />
       <Route path="/volunteerlist" element={<VolunteerList />} />
       <Route path="/ngoabout" element={<NgoAbout />} />
       <Route path="/appointmentlist" element={<AppointmentList />} />
      </Routes>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default App