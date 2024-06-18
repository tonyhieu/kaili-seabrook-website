import React from 'react';

import '../css/default.css';
import '../css/about.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDeviantart } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <div className="default">
            <main className="about">
                <div className="text-summary">
                    <h2>About</h2>
                    <p>Hi there! My name is Kaili and I'm a Japanese-American artist based in Southern California as well as a current student at Laguna College of Art and Design studying in their Game Art Program! I love making characters and doing 3D art, but aside from art you can find me studying marine biology or possibly cafe hopping :)</p>
                </div>

                <div className="text-summary">
                    <h2>Contact</h2>
                    <p><FontAwesomeIcon icon={faEnvelope} /> &nbsp;kaiseabrook@gmail.com</p>
                </div>
            </main>
        </div>
    );
}

export default About;