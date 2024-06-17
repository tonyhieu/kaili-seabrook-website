import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-title">
                <span className="name">Kaili Seabrook</span>
                <span className="flavorText">Artist. Storyteller. Creator.</span>
            </div>

            <div className="nav-logo">
                <a href="/"><img src="https://pbs.twimg.com/profile_images/1527826991155597312/hZDYQ_1f_400x400.jpg" alt="logo" /></a>
                {/* <span className="name">Kaili Seabrook</span>
                <span className="flavorText">Artist. Storyteller. Creator.</span> */}
            </div>

            <div className="nav-links">
                <a href="/2d">2D</a>
                <a href="/3d">3D</a>
                <a href="/concept">Concept</a>
                <a href="/about">About</a>
                {/* <a href="/contact">Contact</a> */}
            </div>
        </nav>
    )
};

export default Navbar;