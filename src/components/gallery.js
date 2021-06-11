import React from 'react';
import './gallery.css';
import Footer from './footer';
import Navigation from './navigation';

const Gallery = () => {
    return ( 
        <div className='Gallery'>
            <Navigation />
            <div class="display-3 headerGallery">Meet the Skuligans!</div>
            <div class="button_position">
                <a href="/year1" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">2015-2016</a>
                <a href="/year2" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">2016-2017</a>
                <a href="/year3" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">2017-2018</a> 
            </div>
            <div class="button_position">
                <a href="/year4" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">2018-2019</a> 
                <a href="/year5" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">2019-2020</a>
                <a href="/year6" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">2020-2021</a>
            </div>
            <div class="button_position">
                <a href="/year7" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">2021-2022</a>
            </div>
            <Footer />
        </div>  
    );
}

export default Gallery;