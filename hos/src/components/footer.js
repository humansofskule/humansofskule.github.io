import React, { useState, useCallback }  from 'react';
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
        "background-color": "black",
        "position": "absolute",
        "width": "100%"
    };

    return ( 
        <div  class='footer' style={style}>
            <p class='footHeader'>Click on the icons to check us out!</p>
            <div class='row'>
                <div class='col'>
                    Facebook: <a href='https://www.facebook.com/humans.of.skule' target='blank'><FontAwesomeIcon icon={faFacebook} style={{color:'white'}} size='1.5x'/></a>    
                </div>
                <div class='col'>
                    Instagam: <a href='https://www.instagram.com/humans.of.skule/' target='blank'><FontAwesomeIcon icon={faInstagram} style={{color:'white'}} size='1.5x'/></a>
                </div>
            </div>
    </div>
    );
}

export default Intro;