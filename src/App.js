import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Content from './components/Content';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (<Router>
    <Navbar />
    <div className="main">
      <div className='content'>
        <Content />
      </div>
    </div>
    <div className='footer'>

    </div>
  </Router>
  );
}

export default App;
