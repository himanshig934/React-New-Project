import React from 'react'
import Herosection from './components/Section1/Herosection'
import Footer from './components/Section1/Footer'
import Notes from './Notebook/Notes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Section1/Navbar';


export default function App() {
  return (
    <>
    <Router>
      <Navbar/>
      
      <Routes>
        
      <Route path = '' element ={<Herosection/>}/>
      <Route path ='/Notes' element = {<Notes/>}/>
      </Routes>
      </Router>
    </>
  )
}


