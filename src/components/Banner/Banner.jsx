// import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
 // Import the carousel styles
import Banner_img from '../../assets/61CiqVTRBEL._SX3000_.jpg'
import Banner_img01 from '../../assets/61OdzZqmXyL._SX1500_.jpg'
import Banner_img02 from '../../assets/51RPiINhM7L._SX1500_.jpg'
import Banner_img03 from '../../assets/61okdP-S1HL._SX1500_.jpg'
import Banner_img04 from '../../assets/61P7hqIHrdL._SX3000_.jpg'

const Banner = () => {
    return (
        <div className='relative'>
            <div className="relative w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20 overflow-hidden hidden" />
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        >
            <div>
                <img loading="lazy" src={Banner_img} alt="Image 3" />
            </div>
            <div>
                <img loading="lazy" src={Banner_img01} alt="Image 3" />
            </div>
            <div>
                <img loading="lazy" src={Banner_img02} alt="Image 3" />
            </div>
            <div>
                <img loading="lazy" src={Banner_img03} alt="Image 3" />
            </div>
            <div>
                <img loading="lazy" src={Banner_img04} alt="Image 3" />
            </div>
        </Carousel>
        </div>
        
    );
};

export default Banner;
