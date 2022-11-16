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
`;

export const BaseStyles = styled.div`
  .container {
    display: flex;
    max-width: 1200px;
    min-height: 90vh;
    width: 90%;
  }
  .title {
    font-size: 2rem;
  }
`;

export default GlobalStyle;
