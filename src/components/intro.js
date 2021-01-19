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
          caption: "Not snappy, but truthful. I just spout one liners when I'm in the mood - Anurag Agarwal 📷: Addy Bhatia"
        },
        {
          src: "https://drive.google.com/uc?id=0B6tV4E17tBDuZnU4YW91R3VSaUU",
          width: 6,
          height: 4,
          caption: "If I could restart University, I would maybe try to involve myself more in things that had to with academic improvement. I did a lot of SKULE stuff because I found it fun and I wanted something different from highschool, because highschool I was all in academic shit. I wanted to experience something different and new, so I jumped into SKULE as much as I could, but then I also neglected the academic equivalent of SKULE. There are so many design teams, and so many cool things where I can learn practical and technical skills which are just as fun as SKULE, but I ended up missing out on a lot of that because I wasn't able to time balance for fun and design teams. I definitely would want to explore a design team more, which would be my main thing. But I wouldn't want to give up what I have done. I wanna try to do everything, which is really difficult. - Hema Nookla 📷: Addy Bhatia"
        },
        {
          src: "https://drive.google.com/uc?id=0B6tV4E17tBDuT1B6R3hCRDRhNkk",
          width: 3.5,
          height: 6,
          caption: "I'm looking forward to the challenge next year, I'm pretty competitive. On the contrary, I'm afraid of failing out first year - I feel like that's everyone's fear though! - Julian Ashworth 📷: Addy Bhatia"
        },
        {
          src: "https://drive.google.com/uc?id=0B6tV4E17tBDuVnF0YWxKcFhqcWM",
          width: 6,
          height: 3.5,
          caption: "Dubai and Toronto are very much alike in the sense that they’re both fundamentally built by expatriates and immigrants. I’ve lived in Dubai for 11 years and witnessed its metamorphosis into the city of dreams, which alone was just an experience. However, the main difference I noticed from Dubai and Toronto is the community. In Dubai, we live in a bubble, where just hearing a siren is an occasion in itself. Don’t get me wrong, it’s great that it’s such a safe place to grow up in, but I just feel like this safe shell that just protects us from all the issues going on can sometimes result in a massive culture and exposure shock. People there can also be critical of your social class, which - if you haven’t lived anywhere else before - can entrap you in this closed-minded mentality. Whereas in Toronto, no one cares who you are or where you’re from. I’ve found everyone here very welcoming, where I can also get the chance to try out a whole bunch of new hobbies, and that lifestyle is encouraged. 📷: Addy Bhatia"
        },
        {
          src: "https://drive.google.com/uc?id=0B6tV4E17tBDuT201Z2NlSV9fT1k",
          width: 6,
          height: 3.5,
          caption: "My favorite show when I was growing up was Mythbusters, and it still is today. One of my dream jobs is to be a mythbuster. When they got the new hosts, I was like, 'you could've had me, I would've come!' - Chloe Oriotis 📷: Addy Bhatia"
        },
        {
          src: "https://drive.google.com/uc?id=1iLegBwcOw_iihnnTIGshPJhoa_WPhU5-",
          width: 6,
          height: 3.5,
          caption: "Part of my motivation for joining Skule Nite was because when I watched the show last year, I got this overwhelming feeling of 'holy shit these people understand me, it's so nice to be understood'. So I thought I want to help bring that. Lots of time in first year I kept hearing about this 'Skule' community that sounded really fun and great where everyone feels a part of it. But I felt like I was on the outside looking in, thinking wow look at this, this is so cool, I get to tell people I go to a place where this exists. But this year I actually feel a part of it - and this is actually really nice. - Stephanie McDonald 📷: Addy Bhatia"
        },
        {
          src: "https://drive.google.com/uc?id=1nCQFI8ML9QzDzz-vxCM-UB7eTT2T_gMe",
          width: 1.5,
          height: 2,
          caption: "Looking back over the past 4 years, I’ve definitely transformed as a person and I feel like I owe a lot of that to the UofT Skule™ community. When I came into U of T I was really anxious and hard on myself, but everyone here was extremely supportive of me and helped me change how I see myself. This didn’t all happen at once of course, it was a very slow and incremental process. Every day, month, and year, I’ve made progress for the better. And the support system that I have at UofT in my friends and everyone around me was vital. They didn't just help me feel better, but they pushed me to go for more and aim higher. That’s why I wanted to be EngSoc President in my final year, because in a way, I felt like I had to give back and be that support for someone else. - Shivani Nathoo"
        },
        {
          src: "https://drive.google.com/uc?id=1sP-2JkaqImp7h_wiVpz754K39TrxQvDD",
          width: 6,
          height: 4,
          caption: "Laughing is so important. I don’t think enough people understand the importance of humor. You’re burning calories while enjoying yourself. Sounds like my kinda workout. - Karma Saskia 📷: Darsh Jain" 
        },
        {
          src: "https://drive.google.com/uc?id=1jrGhFiqCTtItj5frh6XrEKzTaHj0USi-",
          width: 5.5,
          height: 3,
          caption: "Since applying to jobs in first year, I've realized it's a a marathon, not a sprint. Job hunts start somewhere and you're really shit at first but eventually you get there. Finding a full-time job is a full-time job. - Shashank Iyer 📷: Addy Bhatia"
        },
        {
          src: "https://drive.google.com/uc?id=1dJzW6tdUPVLa6ZvWIk3rwZMTENBdJGnf",
          width: 2.5,
          height: 1.5,
          caption: " When we won, neither of us knew the other. We both worried that we wouldn’t make a genuine connection with each other. We were worried that we would be the one couple in recent memory to lack that. But through the craziness, the dropped pants, the heel click ‘attacks’, the broken calves and wrists, we started breaking that down. We can’t put an exact time on when it happened. Slowly, slowly, slowly, and then all at once we both got a friend out of the deal here. And it seems strange looking back that we never knew each other prior to this, ‘cause you better believe we’re gonna know each other after. - Lisa Zaher and Jacob Foster 📷: Darsh Jain"
          
        },
        {
          src: "https://drive.google.com/uc?id=1Qt8QRwt2XHLSpqQ3BAAREdzfHz_GbkAh",
          width: 4.5,
          height: 2.5,
          caption: "It's my last-first day of school. Not for my insta - it's for me in 20 years. - Andrea Gonzalez 📷: Addy Bhatia"
        },
        {
          src: "https://drive.google.com/uc?id=1f-Cx1sGOsYuTJ8NqprtNkyV_BnUn33iy",
          width: 6,
          height: 3.5,
          caption: "You can spot an only child a mile away, because they'll sibling zone anyone they meet. - Dekksha Tewari 📷: Addy Bhatia"
        },
        {
          src: "https://drive.google.com/uc?id=1pRJ1wP0UH_j6KemLzSyCFbll5FycJqoQ",
          width: 2.5,
          height: 4.5,
          caption: "In one of my lin-alg lectures , the professor was going really fast and i was confused. So i put my hand up and said 'can we go over everything again? I need time to process'. Literally the entire lecture hall turned around to look at me and they all started clapping! -  Urvi Verkhedkar 📷: Darsh Jain"
        },
        {
          src: "https://drive.google.com/uc?id=1SjopZQQFRf6Bi0jA8CcoFo263MEY-L6z",
          width: 6,
          height: 4,
          caption: "Tools are easy to learn. People are hard. - Ben Iain Morehead 📷: Dana Kokoska"
        },
        {
          src: "https://drive.google.com/uc?id=1KMHvnHzkLG1F2MIENaFLFPGwTNioW22O",
          width: 6,
          height: 3.5,
          caption: "My favourite food? I don’t know I feel like I like ramen a lot. Steak is also really good. I like to cook my steak at home, I got really good at it. I mostly like cooking it, its pretty fun. It takes a lot of skill and if you practice it a lot you can get really good. I usually like to put butter on it, and then baste it with rosemary and thyme. I learned this from Gordon Ramsay, I just search Gordon Ramsay steak recipes. I made it, yea, with a cheaper cut of meat though. I’d say I’m like a professional chef. - Zachary LaPointe 📷: Dana Kokoska"
        },
        {
          src: "https://drive.google.com/uc?id=1d0bRxgaJl_dIBNHOBT9YXXP07CWidGea",
          width: 6,
          height: 3.5,
          caption: "I really like running, but if I’m ever going to run long distances again I need 2 hip surgeries. And I can also finish a jar of peanut butter in two weeks. - Mackenzie Clark 📷: Addy Bhatia"
        },
        {
          src: "https://drive.google.com/uc?id=1xDRxOn7HZL67rTiKuyiCuU7wBl06aS3h",
          width: 2.5,
          height: 1.5,
          caption: "I'm not going to lie, engineering is pretty busy. At times I want to do nothing more then just relax. So I do. The most important thing for me is finding something enjoyable, whether it's barbecuing with friends or making a drone. - Aakash Budhera 📷: Darsh Jain"
        },
        {
          src: "https://drive.google.com/uc?id=1zmphRKWjSDJMNc_47gu0sHnKS3UBuZiV",
          width: 4.5,
          height: 3,
          caption: "Better stretch than break. 📸: Darsh Jain"
        },
        {
          src: "https://drive.google.com/uc?id=0B6tV4E17tBDueGlhTzFMZ0VVRm8",
          width: 6,
          height: 3.5,
          caption: "I actually really think that doing varsity sports helps with engineering, because if you just did varsity sports, you'd be super stressful - you'd be really paranoid abut doing your best all the time and training. But then if you just do engineering, you'd be stressed about your marks all the time. You can never stress too much about one thing, and you just kinda go with the flow with everything. It's a good balance. - Lia Cod 📷: Addy Bhatia"
          
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
      <h1 class='display-4 heading'>Welcome to Humans Of Skule!</h1>
      
      <h2 class="to_do1">Click on the pictures to find out more</h2>
      <h2 class="to_do2">Click on the pictures and swipe up to find out more</h2>
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