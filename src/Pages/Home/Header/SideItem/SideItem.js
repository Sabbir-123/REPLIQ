import React from 'react';
import Mock from '../../../../Assets/Home/Mock.mp4'
const SideItem = () => {
    return (
        <div className="pt-5 mx-4 hidden lg:block ">
      <div class="grid grid-rows-3 grid-flow-col gap-6">
        <div class="col-span-2 ...">
        <video controls autoPlay width="1040" height="460">
        <source src={Mock} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
        <div class="row-span-2 col-span-2">
          <img src={'https://i.ibb.co/q0b1kz4/img2.png'} alt="" />
        </div>
      </div>
    </div>
    );
};

export default SideItem;