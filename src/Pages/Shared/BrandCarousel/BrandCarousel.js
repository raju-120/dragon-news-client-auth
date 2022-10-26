import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brands01 from '../../../assets/brands/brands01.jpg';
import brands02 from '../../../assets/brands/brands02.jpg';

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={brands01}
                    alt="First slide"
                    />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={brands02}
                    alt="Second slide"
                    />

                
            </Carousel.Item>
            
    </Carousel>
    );
};

export default BrandCarousel;