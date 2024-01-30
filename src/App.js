import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

import Navbar from './components/Navbar';
import Content from './components/Content';
import About from './components/About';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (<Router>

    <div className="main">
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
      <div className='footer'>
      </div>
    </div>
  </Router>
  );
}

export default App;
