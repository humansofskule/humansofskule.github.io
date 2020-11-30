import React, { useEffect, useState }  from 'react';
import './aboutus.css';
import Footer from './footer';
import Navigation from './navigation';
import { Card, CardColumns } from 'react-bootstrap'; 
import { Image } from 'react-bootstrap';
import Tabletop from 'tabletop';  

const AboutUs = () => {
    const [photos, setphotos] = useState([]);

    useEffect(() => {
        Tabletop.init({
        key: '1FPgRk-hcW727z_cNbv6RhU757dYR_N-ksHZvWp1ygtg',
        simpleSheet: true
        })
        .then((data) => setphotos(data.map(x => (
        {
            src : x.Url,
            Name: x.Name,
            Year: x.Year,
            Position: x.Position
        }))))
        .catch((err) => console.warn(err));
    }, []);

    return ( 
        <div className='AboutUs'>
            <Navigation />
            <div class="display-3 header">About Us</div>
            <h3 class="message">We are a photographic journal of the people that make up Skule™</h3>
            <h2 class="aboutuscontent">President's Message</h2>
            <div class="video_position">
                <iframe src="https://drive.google.com/file/d/1oMVAoR_ONMuWGttzk_1y0julWIMcgCO2/preview"
                 class="videodimensions" allowfullscreen></iframe>
            </div>
            <h2 class="aboutuscontent">Meet our Team</h2>
            <div class="spacing">
                <CardColumns>
                {
                    photos.map((item, index) => 
                       
                            <Card bg='dark' text='light'>
                                <Card.Img as={Image} src={item.src} fluid={true} />
                                <Card.Body>
                                    <Card.Title>{item.Name}</Card.Title>
                                    <Card.Subtitle className="mb-2 test-muted">{item.Year}</Card.Subtitle>
                                    <Card.Text>
                                    {item.Position}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                    )    
                }
                </CardColumns>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;