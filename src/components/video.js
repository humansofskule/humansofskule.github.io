import React from 'react';
import Footer from './footer';
import Navigation from './navigation';
import './video.css';

const Video = () => {
    
    return ( 
        <div className='Video'>
            <Navigation />
            <div class="display-3 header">Video Gallery</div>
            <h3 class="message">Check out what the Skuligans are up to</h3>
            <div class="video1">
                <iframe src="https://www.youtube.com/embed/Dpj5FvOKXpI"
                 class="videodimensions" allowfullscreen></iframe>
            </div>
            <div class="video2">
                <iframe src="https://www.youtube.com/embed/kEAXESZKKZk"
                 class="videodimensions" allowfullscreen></iframe>
            </div>
            <Footer />
        </div>
    );
}

export default Video;