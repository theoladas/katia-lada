import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html,body {
        height: 100vh;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        background-color: #fff;
        /* background-color: #e1E2dc; */
        /* background-color: #f5dfe8; */
        
        color: #282828;
        font-family: 'Manrope', sans-serif;
        /* font-family: 'Arima', cursive; */
        /* font-family: 'Roboto', sans-serif; */
    }
    
`;

export default GlobalStyle;
