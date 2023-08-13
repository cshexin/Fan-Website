import './home.css';
import * as React from 'react';

const lyricsClick = () =>{
  console.log("Howdy lyrics")
} 

function home() {
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

      <main>
        <div class="card-container">
          <div onClick={lyricsClick}  class="card">中译歌词</div>
          <div class="card">作品信息</div>
          <div class="card">赏析</div>
        </div>
      </main>

    </div>
  );
}

export default home;
