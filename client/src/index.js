import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, HashRouter as Router, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import Album from './pages/Album';
import InsertAlbum from './pages/InsertAlbum'
import Albuminfo from './pages/Albuminfo'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Link to="/Insertalbum"> Insert an Album</Link>
    <Link to="/Album"> Go to the Albums Page</Link>

    <Routes>
        <Route index element={<Home />} />
        <Route path='/Album' element={<Album />} />
        <Route path='/Insertalbum' element={<InsertAlbum />}/>
        <Route path='/Albuminfo/:id' element={<Albuminfo />}/>
    </Routes>
  </Router>

);
