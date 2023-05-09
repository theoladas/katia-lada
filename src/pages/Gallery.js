import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import about from "../img/about-us-header.png";
import about2 from "../img/about-us-homepage.png";

const GalleryTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const GalleryWrapper = styled.div`
  .slick-slide img {
    display: block;
    height: 60vh;
    margin: 0 auto;
    object-fit: cover;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    color: #e4389b;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: black;
  }

  .slick-dots li.slick-active button:before {
    color: #e4389b;
  }
`;

const Gallery = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className="hero-section">
      <GalleryTitle className="main-title gallery-title">Gallery</GalleryTitle>
      <GalleryWrapper>
        <Slider {...sliderSettings}>
          <div>
            <img src={about} alt="Grid 1" />
          </div>
          <div>
            <img src={about2} alt="Grid 2" />
          </div>
          <div>
            <img src={about} alt="Grid 3" />
          </div>
          <div>
            <img src={about2} alt="Grid 4" />
          </div>
          <div>
            <img src={about} alt="Grid 5" />
          </div>
          <div>
            <img src={about2} alt="Grid 6" />
          </div>
        </Slider>
      </GalleryWrapper>
    </main>
  );
};

export default Gallery;
