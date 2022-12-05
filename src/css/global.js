import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    user-select: none;
    border: 0;
    font-family: sans-serif;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    background-color: #111;
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
  }
`;
