import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import './album.css';


function Album() {

    const [listOfAlbums, setListOfAlbums] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/albums").then((response)=>{
            setListOfAlbums(response.data)
        })
    }, []);

  return (
    <div className="App">
      <nav className='nav-bar'>
        <h1>
          中岛美雪资料馆
        </h1>
        <ul>
          <li><a href="#home">主页</a></li>
          <li><a href="#lyrics">中译歌词</a></li>
          <li><a href="#discography">作品信息</a></li>
          <li><a href="#analysis">赏析</a></li>
          <li><a href="#about">关于</a></li>
        </ul>
      </nav>

        {listOfAlbums.map((value, key)=>{
            return (
                <div className="album">
                    <div className="title">{value.title}</div>
                    <div className="date">{value.released_date}</div>
                </div>
            )

        })}

      

    </div>
  );
}

export default Album;
