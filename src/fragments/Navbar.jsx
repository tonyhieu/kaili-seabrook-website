import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const handleLoad = (link) => {
        useNavigate(link);
    }

    return (
        <nav>
            <div className="nav-logo">
                <a href="/"><img src="https://pbs.twimg.com/profile_images/1527826991155597312/hZDYQ_1f_400x400.jpg" alt="logo" /></a>
                <span className="name">Kaili Seabrook</span>
                <span className="flavorText">Artist. Storyteller. Creator.</span>
            </div>

            <div className="nav-links">
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/search">Search</a>
            </div>
        </nav>
    )
};

export default Navbar;