import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
        color: #edf0f1;
        font-family: 'Manrope', sans-serif;
        /* font-family: 'Arima', cursive; */
        /* font-family: 'Roboto', sans-serif; */
    }

    img {
        display: block;
        max-width: 100%;
    }
`;

export default GlobalStyle;
