import { createGlobalStyle } from "styled-components";
// import { PageContentWrapper } from './Wrappers'

const GlobalStyles = createGlobalStyle`
    :root {
        /* Colours */
        /* Each brand colour will have four variants. The darkest of which gets the variable name, and the lighter variants will go from darkest (22), to lightest (44). This is not based on any naming convention, it just seems easy to follow, and feels cooler than (1, 2, 3), or (light, lighter, lightest), etc... */

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
        font-family: 'Source Sans Pro', sans-serif;
        font-size: var(--font-base-size);
        border: none;
        margin: 10px 0;
        box-sizing: border-box;

        &:hover {
		    background-color: var(--blue);
	    }
    }
`;

export default GlobalStyles;
