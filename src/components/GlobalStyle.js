import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

// Base styles
export const GlobalStyle = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
        background-color: #f0e9eb;
        color: #282828;
        font-family: 'Manrope', sans-serif;
        /* font-family: 'Dancing Script', cursive; */
        /* font-family: 'Roboto', sans-serif; */
  }
  img {
        display: block;
        max-width: 100%;
  }
  a {
        text-decoration: none;
  }
  
  /* Utility Classes */
  .flex {
      display: flex;
  }
  .half-container {
      padding: 5rem;
      min-height: 45vh;
      background-color: #fff;
      @media only screen and (max-width: 500px) {
        padding: 4rem 2rem;
      }
      @media only screen and (max-width: 390px) {
        padding: 2rem 1rem;
      }
  }
  .homepage{
      min-height: 90vh;
  }
  .hero-section {
      min-height: 90vh;
      padding: 5rem;

      @media only screen and (max-width: 500px) {
        padding: 4rem 2rem;
      }
       @media only screen and (max-width: 390px) {
        padding: 2rem 1rem;
      }
  }
  .hero-content {
      width: 50%;
      padding: 0rem .5rem;
      @media screen and (max-width: 1070px) {
        width: 60%;
        padding-right: 1rem;
      }
      @media screen and (max-width: 768px) {
        width: 100%;
        margin: auto;
      }
  }
  .primary-btn-container {
      padding: 2rem 0;
      @media screen and (max-width: 768px) {
        text-align: center;
      }
      .primary-btn {
        font-size: 1.1rem;
        text-decoration: none;
        letter-spacing: 1px;
        color: #e4389b;
        padding: 10px 12px;
        color: #fff;
        background: #f49ac1;
        border: 1px solid #f49ac1;
        border-radius: 10px;
        opacity: 1;
        transition: all 0.4s ease;
        &:hover,
        &:focus {
          opacity: 0.7;
        }
      }
  }
  .call-us-link {
          color: #f49ac1; 
          transition: text-decoration 0.4s ease;
          &:hover {
            text-decoration: underline ;
          }
  }
  .contact-icon {
      font-size: 1.2rem;
      color: #f49ac1;
      margin-right: 0.5rem;
      transition: color 0.4s ease;
      @media only screen and (max-width: 390px) {
        font-size: 1rem;
        margin-right: .3rem;     
      }
      &:hover {
        color: #f49ac1;
      }
  }
  .main-title {
      font-family: "Arima", cursive;
      font-size: 3rem;
      font-weight: 700;
      color: #282828; 
      margin-top: 5rem;
      @media screen and (max-width: 1024px) {
        line-height: 55px;
        font-size: 2.6rem;
        margin-top: 5rem;
      }
      @media screen and (max-width: 768px) {
        text-align: center;
      }
      /* @media only screen and (max-width: 500px) {
        font-size: 2.5rem;
        padding-top: 0;
        margin-top: 1rem;
      } */
  }
  .katia-logo-text {
      max-width: 100%;
      display: block;
      padding: 1rem 0 2rem;
      
      @media screen and (max-width: 990px) {
        padding: .5rem 0;
      }
      @media screen and (max-width: 768px) {
        margin: auto;
        padding: 1rem;
      }
      @media screen and (max-width: 500px) {
        max-width: 60%;
      }
  }

  /* Our Store Section */
  .our-store {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      background: #fff;
      .map-container {
       width: 50%; 
       @media only screen and (max-width: 850px) {
          width: 100%;
        }
       iframe {
        width: 90%;
       }
      .map {
       @media only screen and (max-width: 850px) {
        width: 100%;
        padding-bottom: 1rem;
       }    
        }
      }
      .our-store-content {
        width: 50%; 
        margin-right: -5rem;
        @media only screen and (max-width: 850px) {
          width: 100%;
          margin-right: 0rem;
        }
      .primary-btn-container {
      @media screen and (max-width: 850px) {
        text-align: center;
      }
      }
      .main-title {
      @media screen and (max-width: 850px) {
        text-align: center;
        padding-top: 1rem;
      }
      }
      .address-container {
       @media screen and (max-width: 850px) {
        text-align: center;
      } 
      }
    }   

    .address-icon {
      color: #f49ac1;
      padding-right: 10px;
    }
    .opening-hours-title {
      font-family: 'Arima', cursive;
      font-size: 1.8rem;
      padding: 1rem 0rem .5rem 0rem;
      @media screen and (max-width: 850px){
        text-align: center;
      }
    }
    .flex-open-store {
      display: flex;
      gap: 1.4rem;
      @media screen and (max-width: 850px){
        align-items: center;
        justify-content: center;
      }
       @media screen and (max-width: 450px){
        gap: 10px;
      }
      .open-days, .open-hours {
        font-size: 1.1rem;
        line-height: 27px;
        @media screen and (max-width: 550px){
        font-size: 1rem;
      }
      }
      .open-hours {
        color: #f49ac1;
        span {
          color: #282828;
        }
      }
    }
  }
  
  /* Contact Section */
  .contact-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      @media only screen and (max-width: 850px) {
        justify-content: center;
      }
      .contact-content {
        width: 50%;
        padding-bottom: 2rem;
        padding-right: 2rem;
        @media only screen and (max-width: 850px) {
        width: 100%;
        text-align: center;
        padding-right: 0rem;
        p {
          text-align: center;
        }
        }
        .contact-links {
          color: #282828;
          transition: color .4s ease;
          &:hover {
            color: #f49ac1;
          }
        }
      }
      .form-container {
        width: 50%;
        padding-right: 2rem;
        margin-right: -5rem;
        @media only screen and (max-width: 950px) {
          margin-right: -2rem; 
          padding-right: 0rem;
        }
        @media only screen and (max-width: 850px) {
          width: 100%;
          margin-right: 0rem; 
          padding-right: 0rem;
        }
        form {
          display: flex;
          flex-direction: column;
          background: #fff;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          max-width: 500px;
          @media only screen and (max-width: 850px) {
            margin:auto;
          }
          input, textarea {
            padding: .5rem;
            border: 1px solid #F0F0F0;
            background-color: #F0F0F0;
            border-radius: 10px;
            margin: .5rem 0;
          }
          input[type="text"],input[type="email"], textarea {
                    font-family: 'Manrope', sans-serif;
                    font-size: 1.1rem;
          }
          textarea {
            resize: none;
          } 
          .form-btn{
            margin-left: auto;
            padding: .5rem;
            margin-top: .5rem;
            background: #f49ac1;
            border: 1px solid #f49ac1;
            border-radius: 10px;
            color: #fff;
            font-family: 'Manrope', sans-serif;
            font-size: 1rem;
            letter-spacing: 1px;
            cursor: pointer;
            opacity: 1;
            transition: opacity .4s ease;
            &:hover {
              opacity: .8;
            }
          }
        }
      }
  }

`;

// Styled Components
export const Page = styled.main`
  padding: 2rem 5rem;
  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
  /* min-height: 90vh;
  padding: 2rem 5rem;
  @media (max-width: 768px) {
    padding: 2rem 2rem;
    min-height: initial;
  } */
`;

export const PageTitle = styled.h2`
  font-family: "Arima", cursive;
  font-size: 3rem;
  font-weight: 700;
  color: #282828;
  @media screen and (max-width: 1330px) {
    padding-top: 5rem;
  }
  @media screen and (max-width: 950px) {
    line-height: 55px;
    font-size: 2.6rem;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media only screen and (max-width: 500px) {
    padding-top: 0;
  }
`;

export const FlexRowHeroContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding-top: 2rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const HeroContent = styled.div`
  max-width: 100%;
  padding-top: 2rem;
`;

export const HeroImage = styled.div`
  padding-top: 2rem;
  img {
    width: 100%;
    height: auto;
    object-fit: cove;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;
export const Paragraph = styled.p`
  font-family: "Comfortaa", cursive;
  font-size: 1.135rem;
  text-align: left;
  line-height: 30px;
  color: #282828;
  max-width: 80%;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  @media screen and (max-width: 990px) {
    font-size: 1.125rem;
    max-width: 100%;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
  @media only screen and (max-width: 390px) {
    font-size: 1rem;
  }
`;
export const CTAButton = styled.a`
  border: 1px solid #e4389b;
  border-radius: 20px;
  color: #e4389b;
  color: #e4389b;
  padding: 8px 20px;
  transition: all 0.4s ease;
  &:hover,
  &:focus {
    color: #282828;
    background: #e4389b;
  }
`;
export const HeroImg = styled.img`
  height: auto;
  margin-left: auto;
  @media screen and (max-width: 1024px) {
    margin: auto;
  }
`;
export const CTACall = styled.a`
  color: #f49ac1;
  letter-spacing: 1px;
  font-weight: 600;
  opacity: 1;
  transition: all 0.4s ease;
  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;
export default GlobalStyle;
