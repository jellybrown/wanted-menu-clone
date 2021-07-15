import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        height:100vh;
        width:100%;
        font-size: 14px;
    }
    #root {
        min-height: 100vh;
    }
    body, h1, h2, ul, p {
        margin:0;
        padding:0;
    }
    ul {
        display: inline-block;
    }
    li {
        list-style:none;
        display:inline-block;
    }
    h1, h2 {
        display: inline-block;
    }
    h2 {
        font-size: 18px;
    }
    a {
        text-decoration: none;
        color: black;
    }

`;

export default GlobalStyle;
