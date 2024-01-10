
import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Grid from '@mui/material/Grid';
import NavBar from '../config/Nav';
import './Album.css';

function Album() {

    const [listOfAlbums, setListOfAlbums] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get("http://localhost:3001/album").then((response)=>{
            setListOfAlbums(response.data)
        })
    }, []);

    function formatDateToChinese(inputDate) {
      const parts = inputDate.split('-');
      if (parts.length !== 3) return inputDate; 
      return `${parts[0]}年${parts[1]}月${parts[2]}日`;
    }
    
    return (
      <div className="App">
        <NavBar/>
        <Grid className='albums-container' container spacing={3}> 
          {listOfAlbums.map((value, key) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={key}> 
                <div className="album" onClick={() => { navigate(`/albuminfo/${value.id}`) }}>                  
                    <img src={`http://localhost:3001/covers/album/${value.cover}`} alt={`${value.title} cover`} />
                    <div className="title">{value.title}</div>
                    <div className="date">{formatDateToChinese(value.released_date)}</div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
    
}

export default Album;
