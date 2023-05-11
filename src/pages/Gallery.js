import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import galleryData from "../resources/gallery-data.json";

const GalleryPage = styled.main`
  padding-top: 2rem;
`;
const GalleryTitle = styled.h2`
  @include flex;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GalleryWrapper = styled.div`
  --primary: #e4389b;
  --dot-width: 15px;
  --dot-height: 15px;
  padding-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* min-height: 60vh; */

  .carousel .slide img {
    display: block;
    max-width: 40%;
    height: auto;
    margin: 0 auto;
    object-fit: cover;
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
  }

  .carousel .control-dots .dot.selected {
    background: var(--primary);
    width: var(--dot-width);
    height: var(--dot-height);
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
