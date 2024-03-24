import React from 'react';

import '../css/default.css';
import '../css/contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDeviantart } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div className="default">
            <main className="contact">
                <h2>Contact Information</h2>
                <span class="info-line"><FontAwesomeIcon icon={faEnvelope} /> <span>test@gmail.com</span></span>
                <span class="info-line"><FontAwesomeIcon icon={faTwitter} /> <span>@ratgmtf</span></span>
                <span class="info-line"><FontAwesomeIcon icon={faDeviantart} /> <span> @something</span></span>
            </main>
        </div>
    );
}

export default Contact;