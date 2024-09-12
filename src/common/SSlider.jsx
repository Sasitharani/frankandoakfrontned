import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import React from 'react'
import DataForSlider from './dataForSlider';

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
      <div className='p-8 bg-slate-300'>
        <p className='text-4xl p-9 '>Din't Hear it from us?</p>
        <Slider {...settings}>
          <div className="border-x-gray-400 "><DataForSlider /></div>
          <div className="border-x-gray-400 "><DataForSlider /></div>
          <div className="border-x-gray-400"><DataForSlider /></div>
        </Slider>
      </div>
    );
}
