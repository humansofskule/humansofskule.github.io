import React, { useEffect, useState }  from 'react';
import './year.css';
import Footer from './footer';
import Navigation from './navigation';
import { Card, CardDeck } from 'react-bootstrap'; 
import { Image } from 'react-bootstrap';
import Tabletop from 'tabletop';  

const Year1 = () => {

    const [photos, setphotos] = useState([]);

    useEffect(() => {
        Tabletop.init({
        key: '1xiJOJbt70BfJCeX0ke1-mZ4ki3kq9qQWdo5zWqgMy6o',
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
            <div class="display-2 headerYear">2017-2018</div>
            <div class="spacing">
                {
                    photos.map((item, index) => 
                        <CardDeck>
                            <Card bg='dark' text='light'>
                            <Card.Img as={Image} src={item.src} fluid={true} />
                            <Card.Body>
                                <Card.Text class="positionCardtext">
                                {item.caption}
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </CardDeck>

                    )    
                }
            </div>
            <Footer />
        </div>  
    );
}

export default Year1;