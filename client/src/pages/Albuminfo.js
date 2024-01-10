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
    const [showAddSong, setShowAddSong] = useState(false);
    const [editingSongId, setEditingSongId] = useState(null);
    const [editedSongTitle, setEditedSongTitle] = useState("");

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
        setShowAddSong(false);

      })
    }

    const startEdit = (song) => {
      setEditingSongId(song.id);
      setEditedSongTitle(song.title);
    };
    
    const saveEdit = (id) => {
      axios.put(`http://localhost:3001/songs/${id}`, { title: editedSongTitle }).then(() => {
        const updatedSongs = songs.map(song => {
          if (song.id === id) {
            return { ...song, title: editedSongTitle };
          }
          return song;
        });
        setSongs(updatedSongs);
        setEditingSongId(null);
      });
    };
    
    const cancelEdit = () => {
      setEditingSongId(null);
    };
    
    const removeSong = (id) => {
      axios.delete(`http://localhost:3001/songs/${id}`).then(() => {
        setSongs(songs.filter(song => song.id !== id));
      });
    };
    
  return (
    <div>
      <NavBar />
      <div className='album-detail'>
        {/* main section */}
        <div className='album'>
          <div className='title'>{albumObject.title}</div>
          <div className='date'>{albumObject.released_date}</div>

          <div className='listOfSongs'>
              {songs.map((song) => {
                return (
                  <div key={song.id} className='song'>
                    {editingSongId === song.id ? (
                      <>
                        <input
                          type="text"
                          value={editedSongTitle}
                          onChange={(e) => setEditedSongTitle(e.target.value)}
                        />
                        <button onClick={() => saveEdit(song.id)}>Save</button>
                        <button onClick={cancelEdit}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <span>{song.title}</span>
                        <span className="song-buttons">
                          <button onClick={() => startEdit(song)} style={{ marginRight: '10px' }}>Edit</button>
                          <button onClick={() => removeSong(song.id)}>Remove</button>
                        </span>
                      </>
                    )}
                  </div>
                );
              })}
          </div>

          <div className='addSong-container'>
          {showAddSong ? (
            <>
              <input type="text" placeholder='Title' autoComplete='off' value={newSong} onChange={(event) => setNewSong(event.target.value)} />
              <button onClick={() => { addSong(); setShowAddSong(false); }}> Done </button>
            </>
          ) : (
            <button onClick={() => setShowAddSong(true)}> + </button>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Albuminfo