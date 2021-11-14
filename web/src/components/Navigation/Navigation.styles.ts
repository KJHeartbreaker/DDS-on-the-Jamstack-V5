import styled, { css } from "styled-components";
import { device } from "../../styles/Breakpoints";
import { Container } from "../../styles/Wrappers";

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media ${device.sm} {
    width: 100%;
    height: "100px";
    padding: 0;
  }

  @media ${device.md} {
    display: grid;
    grid-template-columns: 1fr;
    height: unset;
  }
`;

export const PrimaryNav = styled(Container)`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  max-width: 100%;
  width: 100%;
  margin: 0;
  padding-left: 10px;
  padding-right: 20px;
  box-sizing: border-box;

  li {
    list-style: none;
    text-align: center;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    font-weight: 400;
    font-family: "Oswald", sans-serif;
  }

  @media ${device.sm} {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 90px;
    grid-row-start: 1;
    position: sticky;
  }

  @media ${device.md} {
    position: relative;
    grid-column-gap: unset;
    height: 100%;
    margin: 0 auto;
  }

  @media ${device.lg} {
    max-width: 1280px;
  }

  @media ${device.xl} {
  }

  @media ${device.xl} {
    max-width: 1440px;
    grid-template-columns: max(250px) 1fr;
  }

  @media ${device.xxl} {
    max-width: 1600px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 10px;
  height: 70px;
  width: 250px;

  @media ${device.sm} {
    grid-column-start: 1;
    grid-row-start: 1;
    align-items: center;
    justify-content: center;
    padding: unset;
    height: unset;
  }

  @media ${device.md} {
    grid-row-start: 1;
    grid-row-end: 1;
  }

  a {
    width: 200px;
    height: 70px;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 75px 115px;
    gap: 15px;

    @media ${device.sm} {
      width: 250px;
      grid-template-columns: 100px 150px;
    }

    svg {
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }

    .logo-top {
      font-family: "EB Garamond", serif;
      font-size: 1.6em;
      text-transform: uppercase;
      line-height: 0.9;
      letter-spacing: 0.2em;

      @media ${device.sm} {
        font-size: 2em;
      }
    }

    .logo-bottom {
      font-family: "Oswald", serif;
      font-weight: 700;
      font-size: 1em;
      text-transform: uppercase;

      @media ${device.sm} {
        font-size: 1.3em;
      }
    }

    p.logo-top,
    p.logo-bottom {
      justify-content: center;
      align-items: center;
      margin: 0;
    }

    @media ${device.sm} {
      width: 100%;
    }

    @media ${device.lg} {
      padding: 0;
    }
  }
`;

export const MenuItems = styled.ul`
  display: none;

  @media ${device.sm} {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
    padding-left: 0;

    a {
      margin: 0 20px;

      &:hover,
      &.active {
        border-bottom: 2px solid var(--black);
        padding-bottom: 14px;
      }
    }

    @media ${device.md} {
      a {
        &:hover,
        &.active {
          padding-bottom: 10px;
        }
      }
    }

    @media ${device.lg} {
      margin-right: 0;
    }
  }
`;

const hamburger = ({ menuOpen }) => {
  if (menuOpen) {
    return css`
      > div {
        transition: all 0.35s linear;
        transform: rotate(0deg);
        transform-origin: 0% 50%;
        margin: 7px 0;

        :first-child {
          transform: rotate(45deg);
        }

        :nth-child(2) {
          width: 0;
          opacity: 0;
        }

        :last-child {
          transform: rotate(-45deg);
        }
      }
    `;
  }
  return null;
};

export const MobileMenuIcon = styled.div`
  width: 25px;
  min-width: 25px;
  padding: 10px;
  display: block;

  > div {
    height: 2px;
    background: #000;
    margin: 5px 0;
    width: 100%;
  }

  ${hamburger}
`;

export const MobileMenuDropdown = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background: #fff;
  padding: 0 20px;

  ul {
    list-style: none;
    padding: 0;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    margin: 0;

    li {
      height: 70px;
      border-bottom: 1px solid var(--black);
      display: flex;
      justify-content: flex-start;
      align-items: center;

      a {
        text-decoration: none;
      }

      button {
        margin: 0 auto;
        bottom: 30px;
      }

      :last-child {
        padding: 0;
        flex: 1;
      }
    }
  }
`;
