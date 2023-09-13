
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

        {listOfAlbums.map((value, key)=>{
            return (
              <div>
                {/* main section */}
                <div className="album" onClick={()=>{navigate(`/albuminfo/${value.id}`)}}> {/* Update onClick */}
                    <div className="title">{value.title}</div>
                    <div className="date">{value.released_date}</div>
                </div>
                
              </div>
            )

        })}

      

    </div>
  );
}

export default Album;
