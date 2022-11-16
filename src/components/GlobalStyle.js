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
    }
    
    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: #f0e9eb;
        color: #9da6b8;
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
`;
export const Container = styled.div`
  max-width: 1200px;
  padding: 5rem 10rem;
  min-height: 90vh;
  @media only screen and (max-width: 500px) {
    padding: 5rem 2rem;
  }
`;
export const Title = styled.h1`
  font-family: "Arima", cursive;
  font-size: 3rem;
  font-weight: 700;
  color: #282828;
  @media only screen and (max-width: 500px) {
    font-size: 2.5rem;
  }
`;
export const Paragraph = styled.p`
  font-family: "Comfortaa", cursive;
  font-size: 1.135rem;
  text-align: justify;
  line-height: 30px;
  color: #282828;
  max-width: 80%;
  margin-top: 0.5rem;
  @media only screen and (max-width: 500px) {
    max-width: 90%;
  }
`;
export const CTAButton = styled.a`
  border: 1px solid #e4389b;
  border-radius: 20px;
  color: #e4389b;
  padding: 8px 20px;
  transition: all 0.4s ease;
  &:hover,
  &:focus {
    color: #282828;
    background: #e4389b;
  }
`;
export const CTACall = styled.a`
  color: #f49ac1;
  letter-spacing: 1px;
  transition: all 0.4s ease;
  &:hover,
  &:focus {
    color: #282828;
    text-decoration: underline;
  }
`;
export default GlobalStyle;
