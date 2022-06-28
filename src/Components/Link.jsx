import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Bussiness from './Bussiness'
import Entertainment from './Entertainment'
import Error from './Error'
import General from './General'
import Health from './Health'
import Science from './Science'
import Sport from './Sport'
import Technology from './Technolgy'
import TopHeadlines from './Top_Headlines'

const Link = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<TopHeadlines/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path="/science" element={<Science/>}/>
        <Route path="/bussiness" element={<Bussiness/>}/>
        <Route path="/sports" element={<Sport/>}/>
        <Route path="/entertainment" element={<Entertainment/>}/>
        <Route path="/health" element={<Health/>}/>
        <Route path="/general" element={<General/>}/>
        <Route path="*" element={<Error/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default Link