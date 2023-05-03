import React, {useState, useEffect} from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Teams from './Teams';
import Login from './Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstStep from './FirstStep';
import LastStep from './LastStep';

function App() {


  return(
    <Router>
      <div className="App">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <Routes>
            <Route path="/" element={<Login /> }/>
            <Route path="/login" element={<Login /> }/>
            <Route path="/home" element={<Home />} />
            <Route path="/firststep/:id" element={<FirstStep />} />
            <Route path="/laststep/:id/:num" element={<LastStep />} />
            <Route path="/about" element={<About />} />
            <Route path="/teams" element={<Teams />} />
          </Routes>
      </div>
      <footer>
        <ul className="Footer">
          <br/>
          <li id ="footli">© 2022 Riot Games Inc. All Rights Reserved</li>
          <br/>
          <li id ="footli">Contact Us: btmoore@go.olemiss.edu</li>
        </ul>
      </footer>
      
      
    </Router>
    
  );
    

}

export default App;
