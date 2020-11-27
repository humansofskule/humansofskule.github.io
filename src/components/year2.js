import React, { useEffect, useState }  from 'react';
import './year.css';
import Footer from './footer';
import Navigation from './navigation';
import { Card, CardColumns } from 'react-bootstrap'; 
import { Image } from 'react-bootstrap';
import Tabletop from 'tabletop';  

const Year1 = () => {

    const [photos, setphotos] = useState([]);

    useEffect(() => {
        Tabletop.init({
        key: '1y4p2em4kO9AFv3VX9cIRwMI0oUdKSwrh-l9oW-sDNSE',
        simpleSheet: true
        })
        .then((data) => setphotos(data.map(x => (
        {
            src : x.Url,
            caption: x.Title
        }))))
        .catch((err) => console.warn(err));
    }, []);

    return ( 
        <div className='Year'>
            <Navigation />
            <div class="display-2 headerYear">2016-2017</div>
            <div class="spacing">
                <CardColumns>
                {
                    photos.map((item, index) => 
                        <Card bg='dark' text='light'>
                        <Card.Img as={Image} src={item.src} fluid={true} />
                        <Card.Body>
                            <Card.Text class="positionCardtext">
                            {item.caption}
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

export default Year1;