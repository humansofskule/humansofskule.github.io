import React from 'react';
import './footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faInstagram,
    faFacebook,
    faTwitter,
    faYoutube
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
                    <a href='https://www.facebook.com/humans.of.skule' target='blank'><FontAwesomeIcon icon={faFacebook} style={{color:'white'}} size='2x'/></a>    
                    <a class='footerPosition' href='https://www.instagram.com/humans.of.skule/' target='blank'><FontAwesomeIcon icon={faInstagram} style={{color:'white'}} size='2x'/></a>
                    <a class='footerPosition' href='https://twitter.com/HumansofSkule' target='blank'><FontAwesomeIcon icon={faTwitter} style={{color:'white'}} size='2x'/></a>
                    <a class='footerPosition' href='https://www.youtube.com/channel/UCWzHfacjkPeb3XH9ieaXh2Q' target='blank'><FontAwesomeIcon icon={faYoutube} style={{color:'white'}} size='2x'/></a>
                </div>
            </div>
    </div>
    );
}

export default Intro;