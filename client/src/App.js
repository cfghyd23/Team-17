// import { useState, useEffect } from 'react'
import './App.css';
import Campaigns from './components/Campaigns'

const campaigns = [{
  name: 'Blood donation drive in Ranga Reddy',
  day: '3rd May, Hyderabad Centre',
}, {
  name: 'Blood Donation Awareness Run',
  day: '6th June, Necklace Road'
},{
  name: 'Blood donor drive',
  day: '17th July, Hitech City'
},]
const App = () => {
  return (
      <div className='container'>
         <Campaigns value={ campaigns }/>
      <img src={require('./volunteersImg.jpg')} style={{ width: 900, height: 300 }}  class="center" className="img" alt="img"/>
      </div>
  )
}

export default App