import React from 'react';
import './footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faInstagram,
    faFacebook
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
    faInstagram,
    faFacebook
);
                   
function Intro() {
  
    const style = {
        "padding": "2.5vh",
        "color": "white",
        "backgroundColor": "black",
        "position": "absolute",
        "width": "100%"
    };

    return ( 
        <div class='footer' style={style}>
            <div class='row'>
                <div class='col positionFooter'>
                    <a href='https://www.facebook.com/humans.of.skule' target='blank'><FontAwesomeIcon icon={faFacebook} style={{color:'white'}} size='3x'/></a>    
                    <a class='footerPosition' href='https://www.instagram.com/humans.of.skule/' target='blank'><FontAwesomeIcon icon={faInstagram} style={{color:'white'}} size='3x'/></a>
                </div>
            </div>
    </div>
    );
}

export default Intro;