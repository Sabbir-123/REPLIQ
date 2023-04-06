import React from 'react';
import img1 from '../../../../Assets/Home/img1.png'
import img5 from '../../../../Assets/Home/img5.png'
import img4 from '../../../../Assets/Home/img4.png'
import CarouselItem from './CarouselItem';
const Carousel = () => {
    const sliderImage = [
        {
            image: img1,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img5,
            prev: 3,
            id: 1,
            next: 2
        },
        
        {
            image: img4,
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