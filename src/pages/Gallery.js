import React from "react";
import { Page, HeroTitle } from "../components/GlobalStyle";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import galleryData from "../resources/gallery-data.json";

const HeroTitleStyled = styled(HeroTitle)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GalleryWrapper = styled.div`
  --dot-width: 15px;
  --dot-height: 15px;
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 0rem;
  }
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
    border-left: 8px solid var(--color-pink-strong);
  }

  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid var(--color-pink-strong);
  }

  .carousel .control-arrow {
    color: var(--color-pink-strong);
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
    <Page>
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
    </Page>
  );
};

export default Gallery;
