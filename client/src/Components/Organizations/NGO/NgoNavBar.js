import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/regular.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';
import './NgoNavBar.css';
import { Link } from 'react-router-dom';

function NgoNavBar() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'abc dark-mode' : 'abc'}>
      <>
        {/* First navbar with contact info and social media icons */}
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container">
               <div className="w-100 d-flex justify-content-between">
                 <div className='d-flex gap-1 my-auto'>
                   <i className="fa-solid fa-envelope text-light contact-info my-auto"></i>
                   <a href="" className="navbar-sm-brand text-light text-decoration-none contact-info">
                     info@bloodwarriors.com
                   </a>
                   <i className="fa-solid fa-phone contact-info text-light my-auto"></i>
                   <a href="" className="navbar-sm-brand text-white text-decoration-none contact-info">
                     010-020-8340
                   </a>
                 </div>
                 <div>
                   <a href="" className="text-white">
                     <i className="fa-brands fa-facebook me-2"></i>
                   </a>
                   <a href="" className="text-white">
                     <i className="fa-brands fa-instagram me-2"></i>
                   </a>
                   <a href="" className="text-white">
                     <i className="fa-brands fa-linkedin me-2"></i>
                   </a>
                   <a href="" className="text-white">
                     <i className="fa-brands fa-twitter me-2"></i>
                   </a>
                 </div>
               </div>
             </div>
        </nav>

        {/* Main navigation bar */}
        <nav className="navbar2 navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between">
               <div>
                 <h1 className="">Ayudhaar</h1>
               </div>
               <nav className=" navbar2 navbar navbar-expand-lg ">
                 <div className="container-fluid">
                   <div className="collapse navbar-collapse">
                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                       <li className="nav-item nav-items">
                         <Link className="nav-link nav-links" to='/ngohome'>
                           Home
                         </Link>
                       </li>
                       <li className="nav-item nav-items">
                       <Link className="nav-link nav-links" to='/createcampaign'>
                          Create Campaign
                         </Link>
                       </li>
                       <li className="nav-item nav-items">
                       <Link className="nav-link nav-links" to='/volunteerlist'>
                          Volunteer List
                         </Link>
                       </li>
                       <li className="nav-item nav-items">
                       <Link className="nav-link nav-links" to='/ngoabout'>
                           NGO
                         </Link>
                       </li>
                     </ul>
                     <div className="">
                       
                       <Link to='/profile' className="text-decoration-none text-dark">
                         <i className="fa-solid fa-user nav-icon"></i>
                       </Link>
                     </div>
                     
                   </div>
                 </div>
               </nav>
             </div>
        </nav>

        {/* Dark mode and light mode switch */}
        
      </>
    </div>
  );
}

export default NgoNavBar;
