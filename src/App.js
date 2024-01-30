import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Content from './components/Content';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (<Router>

    <div className="main">
      <Navbar />
      <div className='content'>
        <Content />
      </div>
      <div className='footer'>
      </div>
    </div>

  </Router>
  );
}

export default App;
