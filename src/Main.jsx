import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import { Home } from "./Components/Home/Home";
import './App.css';
 import Footer from './Components/Footer/Footer';
 import Why from './Components/Why/Why';
 import Bento from './Components/Bento/Bento';
 import { Toolbar } from "./Components/Toolbar/Toolbar";  

const Main = () => {
  return (
    <>
    <div>
        <Navbar />
      <div className='Main'  style={{ gap: '10rem' }}>
        <Home />
        <Why />
        <Bento />
        <Footer />
      </div>
      </div>
     <Toolbar />
      
    </>
  )
}

export default Main
