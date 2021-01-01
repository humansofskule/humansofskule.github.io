import React from 'react';
import Footer from './footer';
import Navigation from './navigation';
import './workshop.css'

const Workshop = () => {
    
    return ( 
        <div className='Workshop'>
            <Navigation />
            <div class="display-3 header">Workshop</div>
            <h3 class="message">Check out our workshops and events to get more involved</h3>
            <Footer />
        </div>
    );
}

export default Workshop;