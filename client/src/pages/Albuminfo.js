import React, { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from "axios"
import './Albuminfo.css'
import NavBar from '../config/Nav'

function Albuminfo() {

    let{id} = useParams();
    const [albumObject, setAlbumObject] = useState({});
    const [songs, setSongs] = useState([]);
    const [newSong, setNewSong] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:3001/albuminfo/byId/${id}`).then((response) =>{
        setAlbumObject(response.data);
      });

      axios.get(`http://localhost:3001/songs/${id}`).then((response) =>{
        setSongs(response.data);
      });
    
    }, [id]);

    const addSong = () => {
      axios.post(`http://localhost:3001/songs`, {title: newSong, AlbumId: id}).then((response) =>{
        const songToAdd = {title: newSong}
        setSongs([...songs, songToAdd])
        setNewSong("")
      })
    }
      

  return (
    <div>
    <NavBar />
    <div className='album-detail'>
      {/* main section */}

      <div className='album'>
        <div className='title'>{albumObject.title}</div>
        <div className='date'>{albumObject.released_date}</div>
      </div>

      <div className="song">
        <div className='addSong-container'>
          <input tupe="text" placeholder='title' autoComplete='off' value={newSong} onChange={(event) => {setNewSong(event.target.value)}}/>
          <button onClick={addSong}> Add </button>
        </div>
        <div className='listOfSongs'>
          {songs.map((song, key) =>{
            return <div key={key} className='song'>{song.title}</div>
          })}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Albuminfo