import React from 'react'
import './App.css';
import {Outlet} from "react-router-dom";
import Navbar from './LandingPage/Sections/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />      
    </div>
  );
}

export default App;
