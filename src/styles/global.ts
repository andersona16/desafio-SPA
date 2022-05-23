import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box ;
        outline: 0;
        font-family: 'Poppins', sans-serif;

        /* background-color: #121F26; */
    }

    body {

    }

    :root {
      --colors-primary: #121F26;
      --colors-secondary: #182328;
      --colors-white: #F4F4F4;
      --colors-gray: #8E8E8E;
    }

    svg { 
      color: var(--colors-white);
      margin-left: 10px;
    }

    img {
      max-width: 100%;
     max-height: 100%;
    }
`;
