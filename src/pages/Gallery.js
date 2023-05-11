import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import galleryData from "../resources/gallery-data.json";

const GalleryPage = styled.main`
  padding: 2rem 5rem;
  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;
const GalleryTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GalleryWrapper = styled.div`
  --primary: #e4389b;
  --dot-width: 15px;
  --dot-height: 15px;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .carousel .slide img {
    max-width: 50%;
    display: block;
    height: auto;
    margin: 0 auto;
    object-fit: cover;
    @media (max-width: 1024px) {
      max-width: 80%;
    }
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  .carousel .control-next.control-arrow:before {
    border-left: 8px solid var(--primary);
  }

  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid var(--primary);
  }

  .carousel .control-arrow {
    color: var(--primary);
  }

  .carousel .control-dots .dot {
    background: white;
    width: var(--dot-width);
    height: var(--dot-height);
    @media (max-width: 768px) {
      width: 12px;
      height: 12px;
    }
  }

  .carousel .control-dots .dot.selected {
    background: var(--primary);
    width: var(--dot-width);
    height: var(--dot-height);
    @media (max-width: 768px) {
      width: 12px;
      height: 12px;
    }
  }

  .carousel .carousel-status {
    display: none;
  }

  .carousel .thumbs-wrapper {
    display: flex;
    justify-content: center;
  }
`;

const Gallery = () => {
  const images = galleryData.images;

  return (
    <GalleryPage>
      <GalleryTitle className="main-title gallery-title">Gallery</GalleryTitle>
      <GalleryWrapper>
        <Carousel
          showThumbs={true}
          autoPlay
          infiniteLoop
          interval={3000}
          dynamicHeight
          useKeyboardArrows
        >
          {images.map((image, index) => {
            return (
              <div key={index}>
                <img src={image.src} alt={image.alt} />
              </div>
            );
          })}
        </Carousel>
      </GalleryWrapper>
    </GalleryPage>
  );
};

export default Gallery;
