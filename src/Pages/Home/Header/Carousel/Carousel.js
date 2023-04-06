import React from 'react';
import CarouselItem from './CarouselItem';

const Carousel = () => {
    const sliderImage = [
        {
            image: "https://i.ibb.co/Czhdx1t/img1.png",
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: "https://i.ibb.co/YpR5xMT/img5.png",
            prev: 3,
            id: 1,
            next: 2
        },
        
        {
            image: "https://i.ibb.co/WWSwnyL/img4.png",
            prev: 2,
            id: 3,
            next: 1
        }
    ]

    return (
        <div className="carousel pt-5 mx-2">
        {
            sliderImage.map(slide => <CarouselItem key={slide.id} slide={slide}>

            </CarouselItem>)
        }
        
    </div>
    );
};

export default Carousel;