import React from 'react';
import './history.css';
import Footer from './footer';
import Navigation from './navigation';
import img1 from './image/addyPic1.jpg';
import img2 from './image/addyPic2.jpg';

const History = () => {

    return ( 
        <div className='History'>
            <Navigation />
            <div class="display-3 headerHistory">The Big Bang!</div>
            
            <div class="founderMessage">
               <img src={img1} class="img_position1"></img>
               <p>Frosh week is when I knew this was something special. The stories, the people, and the diversity. 
               Skule took me in without hesitation and opened up a new world of possibilities and a social web to connect into.
               Hearing so many stories and backgrounds of my fellow frosh, I was eager to share it with everyone else around me. 
               You travelled all the way from India for ECE? And you play the violin while dropping your pants around campus? 
               How the heck is no one paying any attention to you?! Being the initiative taker that I am, of course, I had to do something.
               Humans of UofT. No, that’s already taken. How about, “Humans of Skule”? Ya, that sounds cheeky, 
               fits into the wholesome vibe, let’s do it.</p>
               <img src={img2} class="img_position2"></img>
               <p>At about the same time, I joined the Skulebook photography team. 
               Photography is super cool, and if it weren’t for liking science as much as I do, 
               I wouldn't have cancelled my applications to go to film school. Turns out Skulebook also wanted to do this initiative.
               They piloted it the year prior (2014) with great feedback and wanted to start again in 2015 - my first year! 
               So more the reason for me to get this going. Without asking, I grabbed three of my friends in the Track One common room 
               and interviewed them with my camera.</p>
               <p>"Engineers deserve a spotlight, a beautiful portrait, and a moment to share their life.
               We are the engineers. We are humans of Skule." - <span>Addy Batia (Mech 1T9 + PEY)</span></p>
            </div>
            <Footer />
        </div>  
    );
}

export default History;