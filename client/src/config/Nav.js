import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className='nav-bar'>
          <h1>
            中岛美雪资料馆
          </h1>
          <ul>
            <li><Link to="/">主页</Link></li>
            <li><Link to="/lyrics">中译歌词</Link></li>
            <li><Link to="/discography">作品信息</Link></li>
            <li><Link to="/analysis">赏析</Link></li>
            <li><Link to="/about">关于</Link></li>
          </ul>
        </nav>
      );
}

export default Nav;
