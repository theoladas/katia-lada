import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        height: 100vh;
        background-color: #e1E2dc;
        /* background-color: #f5dfe8; */
        background-color: #fff;
        color: #282828;
        font-family: 'Manrope', sans-serif;
        /* font-family: 'Arima', cursive; */
        /* font-family: 'Roboto', sans-serif; */
    }
    
`;

export default GlobalStyle;
