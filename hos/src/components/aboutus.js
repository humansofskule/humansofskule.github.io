import React from 'react';
import './aboutus.css';
import Footer from './footer';
import Navigation from './navigation';

const AboutUs = () => {
    return ( 
        <div className='AboutUs'>
            <Navigation />
            <div class="display-3 header">About Us</div>
            <h3 class="message">We are a photographic journal of the people that make up Skule™</h3>
            <h2 class="aboutuscontent">President's Message</h2>
            <h2 class="aboutuscontent">Meet our Team</h2>
            <ul class="list">
                <li>Darsh Jain - President</li>
                <li>Prerna Anand - Webmaster</li>
            </ul>
            <Footer />
        </div>
    );
}

export default AboutUs;