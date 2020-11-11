import React from 'react';
import Intro from './intro';
import Footer from './footer'
import './home.css';
import Navigation from './navigation';

const Home = () => {
    
    return ( 
        <div className = "App" >
            <Navigation />
            <Intro />
            <Footer />
        </div>        
    );
}

export default Home;