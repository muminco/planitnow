import React from 'react';
import './Navbar.css'
import menu from './images/menu.png'
import mumin from './images/mumin.png'

function Navbar() {
    return (
            <div className="navbar">
                <button className="menu-button"><img src={menu} className="menu-image" alt="menu-icon"/></button>
                <div className="planitnow">MuminMeet</div>
                <img className="logo" src={mumin} alt="mumin-icon"/>
                <div className="user-box">
                    <div className="user-name">Peace Be Upon You, Thayyil</div>
                </div>
            </div>
    );
}

export default Navbar;