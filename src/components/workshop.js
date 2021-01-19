import React from 'react';
import Footer from './footer';
import Navigation from './navigation';
import './workshop.css';

const Workshop = () => {
    
    return ( 
        <div className='Workshop'>
            <Navigation />
            <div class="display-3 header">Workshop</div>
            <h3 class="message">Check out our workshops and events to get more involved</h3>
            <div class="v1">
                <iframe src="https://www.youtube.com/embed/SdvKOaLiD9M"
                 class="videodimensions" allowfullscreen></iframe>
            </div>
            <Footer />
        </div>
    );
}

export default Workshop;