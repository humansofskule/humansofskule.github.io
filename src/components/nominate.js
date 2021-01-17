import React from 'react';
import Footer from './footer';
import Navigation from './navigation';
import './nominate.css';

const Nominate = () => {
    
    return ( 
        <div className='Nominate'>
            <Navigation />
            <div class="display-3 header">Nominate your friends!</div>
            <Footer />
        </div>
    );
}

export default Nominate;