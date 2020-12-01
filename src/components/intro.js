import React, { useState, useCallback }  from 'react';
import './intro.css';
import logo from './image/logo.png';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faInstagram,
    faFacebook
  } from '@fortawesome/free-brands-svg-icons';

library.add(
    faInstagram,
    faFacebook
);
                   
function Intro() {
       
    const photos = [
        {
          src: "https://drive.google.com/uc?id=0B6tV4E17tBDuTFp5LWliaWIxbFE",
          width: 6,
          height: 4,
          caption: "insert caption"
        },
        {
          src: "https://drive.google.com/uc?id=0B6tV4E17tBDuZnU4YW91R3VSaUU",
          width: 6,
          height: 4,
          caption: "insert caption"
        },
        {
          src: "https://drive.google.com/uc?id=0B6tV4E17tBDuT1B6R3hCRDRhNkk",
          width: 3.5,
          height: 6,
          caption: "insert caption"
        },
        {
          src: "https://drive.google.com/uc?id=0B6tV4E17tBDuVnF0YWxKcFhqcWM",
          width: 6,
          height: 3.5,
          caption: "insert caption"
        },
        {
          src: "https://drive.google.com/uc?id=0B6tV4E17tBDuT201Z2NlSV9fT1k",
          width: 6,
          height: 3.5,
          caption: "insert caption"
        },
        {
          src: "https://drive.google.com/uc?id=1iLegBwcOw_iihnnTIGshPJhoa_WPhU5-",
          width: 6,
          height: 3.5,
          caption: "insert caption"
        },
        {
          src: "https://drive.google.com/uc?id=1nCQFI8ML9QzDzz-vxCM-UB7eTT2T_gMe",
          width: 1.5,
          height: 2,
          caption: "insert caption"
        },
        {
          src: "https://drive.google.com/uc?id=1sP-2JkaqImp7h_wiVpz754K39TrxQvDD",
          width: 6,
          height: 4,
          caption: "insert caption"
        },
        {
          src: "https://drive.google.com/uc?id=1jrGhFiqCTtItj5frh6XrEKzTaHj0USi-",
          width: 5.5,
          height: 3,
          caption: "insert caption"
        },
        {
          src: "https://drive.google.com/uc?id=1dJzW6tdUPVLa6ZvWIk3rwZMTENBdJGnf",
          width: 2.5,
          height: 1.5,
          caption: "insert caption"
        },
        {
          src: "https://drive.google.com/uc?id=1Qt8QRwt2XHLSpqQ3BAAREdzfHz_GbkAh",
          width: 4.5,
          height: 2.5,
          caption: "insert caption"
        },
        {
          src: "https://drive.google.com/uc?id=1f-Cx1sGOsYuTJ8NqprtNkyV_BnUn33iy",
          width: 6,
          height: 3.5,
          caption: "insert caption"
        },
        {
          src: "https://drive.google.com/uc?id=1pRJ1wP0UH_j6KemLzSyCFbll5FycJqoQ",
          width: 2.5,
          height: 4.5,
          caption: "insert caption"
        },
        {
          src: "https://drive.google.com/uc?id=1SjopZQQFRf6Bi0jA8CcoFo263MEY-L6z",
          width: 6,
          height: 4,
          caption: "insert caption"
        },
        {
          src: "https://drive.google.com/uc?id=1KMHvnHzkLG1F2MIENaFLFPGwTNioW22O",
          width: 6,
          height: 3.5,
          caption: "insert caption"
        },
        {
          src: "https://drive.google.com/uc?id=1d0bRxgaJl_dIBNHOBT9YXXP07CWidGea",
          width: 6,
          height: 3.5,
          caption: "insert caption"
        },
        {
          src: "https://drive.google.com/uc?id=1xDRxOn7HZL67rTiKuyiCuU7wBl06aS3h",
          width: 2.5,
          height: 1.5,
          caption: "insert caption"
        },
        {
          src: "https://drive.google.com/uc?id=1zmphRKWjSDJMNc_47gu0sHnKS3UBuZiV",
          width: 4.5,
          height: 3,
          caption: "insert caption"
        },
        {
          src: "https://drive.google.com/uc?id=0B6tV4E17tBDueGlhTzFMZ0VVRm8",
          width: 6,
          height: 3.5,
          caption: "insert caption"
        }
    ];
    
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
  
    return ( 
      <>
    <div className = "Intro" >
      <img src={logo} class="titleImage"></img>
      <h1 class='display-4 heading'>Welcome to HumansOfSkule!</h1>
      <Gallery photos={photos} onClick={openLightbox} />
      <div class="imageIndent">
        <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos}
            />
          </Modal>
          ) : null}
        </ModalGateway> 
      </div>
    </div>
    </>
    );
}

export default Intro;