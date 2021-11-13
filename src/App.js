import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import Home from 'pages/home/home';


function App() {
  return (
    <div className="App">
      <Routes >
          <Route path="/" element={<Home />} exact />
      </Routes>
    </div>
  );
}

export default App;
