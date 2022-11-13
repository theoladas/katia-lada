import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        /* overflow-x: hidden; */
        height: 100vh;
        font-family: 'Manrope', sans-serif;
        /* font-family: 'Arima', cursive; */
        /* font-family: 'Roboto', sans-serif; */
    }
    
`;

export default GlobalStyle;
