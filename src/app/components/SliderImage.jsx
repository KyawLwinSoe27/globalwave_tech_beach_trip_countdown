"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useMediaQuery} from "react-responsive";
import Image from "next/image"; // Import your custom CSS for Slideshow

const Slideshow = ({ mobileImages, desktopImages }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false, // Disable default arrows
        fade: true, // Enable fade transition

    };
    const images = isMobile ? mobileImages : desktopImages;

    return (
        <div className="slideshow">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index}`} className="slide-image w-full h-full md:h-screen"  />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slideshow;
