import { createGlobalStyle } from "styled-components";
import { device } from "./Breakpoints";

const Typography = createGlobalStyle`
    html {
        font-size: var(--font-base-size);
        color: var(--black);
        font-family: 'Esteban', serif;
        font-display: auto;
        font-style: normal;
        font-weight: 400;
    }

    p, li, time {
        font-size: 1.2em;
        line-height: var(--font-base-line-height);
        font-weight: 100;
    }


    h1,h2,h3,h4 {
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
        margin: 0;
    }

    h1 {
        font-size: var(--font-title1-mobile-size);
        line-height: var(--font-title1-line-height);
        font-weight: 600;

        @media ${device.sm} {
            font-size: var(--font-title1-size);
            line-height: var(--font-title1-line-height);
        }
    }

    h2 {
        font-size: var(--font-title2-mobile-size);
        line-height: var(--font-title2-line-height);

        @media ${device.sm} {
            font-size: var(--font-title2-size);
            line-height: var(--font-title2-line-height);
        }
    }

    h3 {
        font-size: var(--font-title3-mobile-size);
        line-height: var(--font-title3-line-height);

        @media ${device.sm} {
            font-size: var(--font-title3-size);
            line-height: var(--font-title3-line-height);
        }
    }

    a {
        color: var(--black);
        /* Chrome renders this weird with this font, so we turn it off */
        text-decoration-skip-ink: none;
        cursor: pointer;

        &:hover {
            color: var(--blue);
        }
    }

    strong {
        font-family: 'Oswald'-semi-condensed, sans-serif;
		font-weight: 700;
    }

    .center {
        text-align: center;
    }

    :root {
        /* Typography */
        --unit: 16;
        --font-micro-size: calc(10 / var(--unit) * 1rem); /* 10px */
        --font-micro-line-height: calc(12 / 10); /* 12px */
        --font-small-size: calc(14 / var(--unit) * 1rem); /* 14px */
        --font-small-line-height: calc(21 / 14); /* 21px */
        --font-base-size: 1em; /* 16px */
        --font-base-line-height: calc(24 / var(--unit)); /* 24px */
        --font-large-size: calc(18 / var(--unit) * 1rem); /* 18px */
        --font-large-line-height: calc(27 / 18); /* 27px */

        --font-title3-size: calc(21 / var(--unit) * 1rem); /* 21px */
        --font-title3-line-height: calc(30 / 21); /* 30px */
        --font-title2-size: calc(36 / var(--unit) * 1rem); /* 36px */
        --font-title2-line-height: calc(30 / 24); /* 33px */
        --font-title1-size: calc(52 / var(--unit) * 1rem); /* 52px */
        --font-title1-line-height: calc(60 / 54); /* 57px */

        --font-title3-mobile-size: calc(20 / var(--unit) * 1rem); /* 20px */
        --font-title3-mobile-line-height: calc(24 / 21); /* 30px */
        --font-title2-mobile-size: calc(32 / var(--unit) * 1rem); /* 32px */
        --font-title2-mobile-line-height: calc(36 / 24); /* 33px */
        --font-title1-mobile-size: calc(40 / var(--unit) * 1rem); /* 40px */
        --font-title1-mobile-line-height: calc(48 / 48); /* 48px */
    }
`;

export default Typography;
