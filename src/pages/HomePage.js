import React from 'react';
import Navbar from '../fragments/Navbar.jsx';

import '../css/default.css';
import '../css/home.css';

function Home() {
    return (
        <div className="default">
            <header>
                <Navbar />
            </header>

            <main class="home">
                <p>Home Page</p>
            </main>
        </div>
    );
}

export default Home;