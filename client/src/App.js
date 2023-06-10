import React, { useEffect, useState } from 'react'
import './App.css';



function App() {

  // let dispatch=useDispatch();


  // //updating the redux with the user details on reload from local storage
  // useEffect(()=>{
  //  let userObj = JSON.parse(localStorage.getItem('userObj'));
  //  if(userObj!==null)
  // {
  //   let actionObj = login(userObj)
  //   dispatch(actionObj)
  // }
  // },[])

  // let userObj = useSelector(state=>state.user)
  // //userObj has userObj , isLoggedIn , userType
  

  return (
    <div className="App">
        app
       
        {/* <Routes>
        <Route path='/'  element={<Component1/>}/>
            <Route path='/feature1'  element={<Feature1/>}/>
            <Route path='/feature2'  element={<Feature2/>}/>
            <Route path='/route1'  element={<Component1/>}/>
            <Route path='/route2' element ={<Component2/>}/>
            <Route path='/route3'  element={<Component3/>}/>
           
        </Routes> */}
    </div>
  );
}

export default App;
