import React from 'react';
import Navbar from '../fragments/Navbar.jsx';

import '../css/default.css';
import '../css/about.css';

function About() {
    return (
        <div className="default">
            <header>
                <Navbar />
            </header>

            <main class="about">
                <div className="text-summary">
                    <h2>Kaili Seabrook</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus aenean vel elit scelerisque mauris. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Et egestas quis ipsum suspendisse ultrices gravida. Amet dictum sit amet justo donec enim. Libero id faucibus nisl tincidunt eget nullam non nisi. Vel orci porta non pulvinar neque laoreet suspendisse. Facilisi cras fermentum odio eu feugiat pretium. Scelerisque in dictum non consectetur a erat nam at lectus. Pretium vulputate sapien nec sagittis aliquam. Fusce id velit ut tortor pretium viverra suspendisse potenti. Sapien pellentesque habitant morbi tristique. Eu feugiat pretium nibh ipsum consequat. At varius vel pharetra vel turpis nunc eget lorem dolor.</p>
                </div>
            </main>
        </div>
    );
}

export default About;