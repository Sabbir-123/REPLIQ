import React from 'react';
import Carousel from './Carousel/Carousel';
import SideItem from './SideItem/SideItem';
import Mock from '../../../Assets/Home/Mock.mp4'
const Header = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div className="col-span-2 lg:mb-[-170px] mb-2">
          {/* <Carousel></Carousel> */}
          <video controls>
        <source src={Mock} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        </div>
        <div className="lg:mb-[-170px] mb-2">
          <SideItem></SideItem>
        </div>
      </div>
    );
};

export default Header;