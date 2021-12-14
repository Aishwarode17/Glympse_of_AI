import './App.css';
import React from 'react'
import Homepage from './Pages/Homepage';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

import About from './Pages/About';
import Weather from './Pages/Weather';
import Game from './Pages/Game'
import {Entry} from './Pages/Entry';
import RegEntry from './Pages/RegEntry';
import Gender from './Pages/Gender';

export default function App() {
  return (
    <div className='App'>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/Game" element={<Game />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/Gender" element={<Gender />} />
        <Route path="/About" element={<About />} />
        <Route path="/Entry" element={<Entry />} />
        <Route path="/Register" element={<RegEntry />} />
      </Routes>
    </BrowserRouter>
     
    </div>
  )
}

