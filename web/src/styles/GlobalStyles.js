import { createGlobalStyle } from "styled-components";
// import { PageContentWrapper } from './Wrappers'

const GlobalStyles = createGlobalStyle`
    :root {
        --brown: #2e1b0c;
        --tan: #e3c4a8;
        --dark-blue: #3d547a;
        --blue: #7c8cc4;
        --light-blue: #b4d4ec;
        --red: #FF4949;
        --black: #000;
        --white: #fff;
    }

    html, body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        position: relative;
        -webkit-overflow-scrolling: touch;
    }

    a {
        color: var(--dark-blue);
        text-decoration: none;
        cursor: pointer;
        font-weight: 300;

        &:hover {
		    color: var(blue);
	    }


    }

    * {
        &:focus {
            outline: var(--light-blue) auto 1px;
        }
    }

    a.button,
    button {
        cursor: pointer;
        background-color: var(--dark-blue);
        color: var(--white);
        padding: 10px;
        font-family: 'Open Sans', sans-serif;
        font-size: var(--font-base-size);
        border: none;
        margin: 10px 0;
        box-sizing: border-box;
        transition: 0.2s;
        display: block;
        width: fit-content;

        &:hover {
		    background-color: var(--light-blue);
            color: #000;
	    }
    }
`;

export default GlobalStyles;
