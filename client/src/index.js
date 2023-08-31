import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, HashRouter as Router, Routes, Link } from "react-router-dom";
import Home from './pages/home';
import Album from './pages/album';
import InsertAlbum from './pages/insertAlbum'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Link to="/insertalbum"> Insert an Album</Link>
    <Link to="/album"> Go to Albums Page</Link>


    <Routes>
        <Route index element={<Home />} />
        <Route path='/album' element={<Album />} />
        <Route path='/insertalbum' element={<InsertAlbum />}/>
    </Routes>
  </Router>

);

