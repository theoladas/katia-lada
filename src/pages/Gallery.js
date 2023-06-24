import React from "react";
import { HeroSection, HeroTitle } from "../components/GlobalStyle";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import galleryData from "../resources/gallery-data.json";

const HeroTitleStyled = styled(HeroTitle)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    padding-bottom: 4rem;
  }
  @media (max-width: 500px) {
    padding-bottom: 2rem;
  }
`;

const GalleryWrapper = styled.div`
  --dot-width: 15px;
  --dot-height: 15px;
  max-width: 50%;
  margin: 0 auto;
  @media (max-width: 1330px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0rem;
  }

  .carousel .slide img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    margin: 0 auto;
    @media (max-width: 1024px) {
      width: 80%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .carousel .control-next.control-arrow:before {
    border-left: 8px solid var(--color-pink-strong);
  }

  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid var(--color-pink-strong);
  }

  .carousel .control-arrow {
    color: var(--color-pink-strong);
    padding: 0rem 1rem;
  }

  .carousel .control-dots .dot {
    background: var(--color-white);
    width: var(--dot-width);
    height: var(--dot-height);
    @media (max-width: 768px) {
      width: 12px;
      height: 12px;
    }
  }

  .carousel .control-dots .dot.selected {
    background: var(--color-pink-strong);
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
    <HeroSection>
      <HeroTitleStyled>Gallery</HeroTitleStyled>
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
    </HeroSection>
  );
};

export default Gallery;
