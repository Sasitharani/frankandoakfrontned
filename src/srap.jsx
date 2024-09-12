import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import React from 'react'

export default function SSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2 ,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <button type="button" className="slick-prev">Previous</button>,
        nextArrow: <button type="button" className="slick-next">Next</button>
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="grid grid-cols-3 border-2 border-red-500">
            <div className="border-2 border-red-600">
              {/* <img
                src="https://www.frankandoak.com/cdn/shop/files/1210402-400.7889_1200x.jpg?v=1692367258"
                alt="Image 1"
                width="10"
                height="10"
              /> */}
            </div>
            <div className="border-2 border-red-600">check</div>
            <div className="border-2 border-red-600">check</div>
          </div>

          <div className="grid grid-rows-3 border-2 border-red-500">
            <div className="border-2 border-red-600">
              {/* <img
                src="https://www.frankandoak.com/cdn/shop/files/1210402-400.7889_1200x.jpg?v=1692367258"
                alt="Image 1"
                width="10"
                height="10"
              /> */}
            </div>
            <div className="border-2 border-red-600">check</div>
            <div className="border-2 border-red-600">check</div>
          </div>
          {/* <div>
                    <img src="" alt="Image 3" width="" height="" />
                </div>
                <div>
                    <img src="" alt="Image 4" width="" height="" />
                </div>
                <div>
                    <img src="" alt="Image 5" width="" height="" />
                </div>
                <div>
                    <img src="" alt="Image 7" width="" height="" />
                </div> */}
        </Slider>
      </div>
    );
}
