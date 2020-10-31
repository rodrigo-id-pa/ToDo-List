import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root{
  --primary: #333533;
  --secundary: #e8eddf;
  --dark: #242423;
  --light: #999;
  --white: #fff;
  --black: #000;
}

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    height: 100%;
    font-family: --apple-system, Roboto, sans-serif;
    background-color: var(--primary);
  }

  body {
    /* background: var(--bg-body);
    color: var(--bg-text); */
  }

  button, input {
    cursor: pointer;
  }


  li {  list-style: none;}

  a {  text-decoration: none;}

  `;
