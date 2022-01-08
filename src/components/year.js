import React, { useEffect, useState }  from 'react';
import './year.css';
import Footer from './footer';
import Navigation from './navigation';
import { Card, CardColumns } from 'react-bootstrap'; 
import { Image } from 'react-bootstrap';

const apiKey = 'AIzaSyBda85QbRqM_dnBnGb7yq9e3BM5XfmzeCY';
function Year({spreadsheet_key, title}) {

    const [photos, setphotos] = useState([]);

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json', 
        }
        fetch('https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheet_key + '?includeGridData=true&key=' + apiKey, { headers })
        .then(data => data.json())
        .then(data => data.sheets[0].data[0].rowData.slice(1, data.sheets[0].data[0].rowData.length))
        .then(data => data.filter(x => Object.keys(x.values[0]).length > 0))
        .then((data) => setphotos(data.map(x => (
        {   
            src : x.values[0].hyperlink,
            caption: x.values[2].formattedValue
        }))))
        .catch((err) => console.warn(err));
    }, []);

    return ( 
        <div className='Year'>
            <Navigation />
            <div class="display-2 headerYear">{title}</div>
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

export default Year;