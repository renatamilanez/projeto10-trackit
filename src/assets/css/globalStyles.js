import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Playball', cursive;
        font-family: 'Lexend Deca', sans-serif;
        --color-blue: #52b6ff;
        --color-dark-blue: #126ba5;
        --color-gray: #d4d4d4;
        --font-title: 'Playball', cursive;
        --font-body: 'Lexend Deca', sans-serif;
    }

    body{
        background-color: #e5e5e5;
    }
`

export default GlobalStyle;