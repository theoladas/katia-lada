import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "katia";
    src: local("daniel"),url("./fonts/daniel.ttf") format("truetype");
  }
  
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
        /* font-family: 'Arima', cursive; */
        /* font-family: 'Dancing Script', cursive; */
        /* font-family: 'Dela Gothic One', cursive; */
        /* font-family: 'Roboto', sans-serif; */
    }
    img {
        display: block;
        max-width: 100%;
    }
    a {
        text-decoration: none;
    }
    .flex {
      display: flex;
    }
    .half-container {
      padding: 5rem 5rem;
      min-height: 25vh;
      background-color: #fff;

      @media only screen and (max-width: 500px) {
        padding: 5rem 2rem;
      }
    }
    .homepage{
      /* padding-top: 5rem; */
      height: 90vh;
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
    .hero-image {
      width: 50%;
      img {
        width: 100%;
      }
      @media screen and (max-width: 1070px) {
        width: 40%;  
      }
      @media screen and (max-width: 768px) {
        width: 90%;
      }
      @media screen and (max-width: 500px) {
        width: 100%;
      }
    }
    
    .main-title {
      font-family: "Arima", cursive;
      font-size: 3rem;
      font-weight: 700;
      color: #282828;
    
      /* padding: 1rem 0; */
      @media screen and (max-width: 1024px) {
        line-height: 55px;
        font-size: 2.6rem;
      }
      @media screen and (max-width: 768px) {
        text-align: center;
        padding-top: 1rem;
      }
      @media only screen and (max-width: 500px) {
        font-size: 2.5rem;
        padding-top: 0;
      }
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
.serviceSection {
  padding-top: 2rem;
}
    .card {
      margin: 1.5rem .2rem;
      .card-content {
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        
        width: 120px;
        height: 120px;
        background-color:#f49ac1;
        border: 1px solid #f49ac1;
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        transition: .4s all ease;
    
       &:hover, &:focus {
        color: #282828;
        background-color: #f0e9eb;
        border: 1px solid #f49ac1;
      }
      img {
        width: 50px;
        height: auto;
        background-color: fff;
      }
    }
      p {
        overflow-wrap: break-word;
        word-wrap: break-word;
        /* padding-top: .5rem; */
        text-align: center;
        font-size: .95rem;
      }  
  }

    .card-content-make-up {
      
      /* position: absolute;
      top: 10%;
      left: 30%; */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* transform: translate(0% ,20%);       */
      p {
        padding-top: .5rem;
        text-align: center;
        font-size: .95rem;
      }  
    }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
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
  /* max-width: 90%; */
  height: auto;
  margin-left: auto;
  @media screen and (max-width: 1024px) {
    margin: auto;
    /* width: 80%; */
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
    /* color: #282828; */
  }
`;
export default GlobalStyle;
