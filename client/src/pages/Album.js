
import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import NavBar from '../config/Nav';

import './Album.css';


function Album() {

    const [listOfAlbums, setListOfAlbums] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/album").then((response)=>{
            setListOfAlbums(response.data)
        })
    }, []);

    const navigate = useNavigate(); 

  return (
    <div className="App">
      <NavBar/>
      <div className="albums-container">

        {listOfAlbums.map((value, key) => {
          return (
            <div key={key}>
              <div className="album" onClick={() => { navigate(`/albuminfo/${value.id}`) }}>
                  <img src={`http://localhost:3001/covers/album/${value.cover}`} alt={`${value.title} cover`} />
                  <div className="title">{value.title}</div>
                  <div className="date">{value.released_date}</div>
              </div>
            </div>
          );
        })}
      </div>

      

    </div>
  );
}

export default Album;
