// import { useState, useEffect } from 'react'
import './App.css';
import Campaigns from './components/Campaigns'

const campaigns = [{
  name: 'Blood donation drive in Ranga Reddy',
  day: '3rd May, Hyderabad Centre',
}, {
  name: 'Blood Donation Awareness Run',
  day: '6th June, Necklace Road'
},]
const App = () => {
  return (
      <div className='container'>
         <Campaigns value={ campaigns }/>
      <img src="./volunteersImg.jpg" alt="img"/>
      </div>
  )
}

export default App