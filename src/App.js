
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/contact.scss";
import "./styles/footer.scss";
import "./styles/mediaquery.scss";
const App = () => {
 
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/Contact" element={<Contact/>} />
        <Route  path="/Services" element={<Services/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App

