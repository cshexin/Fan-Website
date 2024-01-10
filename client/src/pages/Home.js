import './Home.css';
import * as React from 'react';
import Nav from '../config/Nav'

const lyricsClick = () =>{
  console.log("Howdy lyrics")
} 

function Home() {
  return (
    <div className="App">

      <Nav/>

      <main>
        <div className="card-container">
          <div onClick={lyricsClick}  className="card">中译歌词</div>
          <div className="card">作品信息</div>
          <div className="card">赏析</div>
        </div>
      </main>

    </div>
  );
}

export default Home;
