import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Home from './home';
import Album from './album';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
        <Route index element={<Home />} />
        <Route path='/album' element={<Album />} />
      </Routes>
    </Router>

);

