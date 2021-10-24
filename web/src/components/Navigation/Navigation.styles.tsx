import styled, { css } from "styled-components";
import { device } from "../../styles/Breakpoints";
import { Container } from "../../styles/Wrappers";

export const Nav = styled.nav`
  display: grid;
  grid-template-rows: "60px";
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
  padding-left: 0;
  padding-right: 0;

  li {
    list-style: none;
    text-align: center;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    color: var(--dark-grey);
    font-weight: 400;
  }

  @media ${device.sm} {
    display: grid;
    grid-template-columns: 25% 1fr;
    grid-template-rows: 50px 50px;
    grid-column-gap: 100px;
    grid-row-start: 1;
    position: absolute;
    top: 0;
  }

  @media ${device.md} {
    position: relative;
    grid-template-rows: 70px;
    grid-column-gap: unset;
    grid-template-columns: max(180px) 1fr;
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
    grid-template-columns: max(200px) 1fr;
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
  height: 60px;

  @media ${device.sm} {
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: span 2;
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
    display: flex;
    width: 150px;
    height: 100%;
    justify-content: center;
    align-items: center;

    svg {
      height: 100%;
      width: 100%;
    }

    @media ${device.sm} {
      width: 100%;
      padding: 10px;
      height: 100px;
    }

    @media ${device.md} {
      height: 70px;
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
    justify-content: space-around;
    margin: 0;
    padding-left: 0;

    a {
      &:hover,
      &.active {
        color: var(--green);
        border-bottom: 2px solid var(--dark-grey);
        padding-bottom: 14px;
      }
    }

    @media ${device.md} {
      a {
        &:hover,
        &.active {
          padding-bottom: 24px;
        }
      }
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
  top: 60px;
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
      border-bottom: 1px solid var(--dark-grey);
      display: flex;
      justify-content: flex-start;
      align-items: center;

      a {
        text-decoration: none;
        color: var(--dark-grey);

        &.active {
          color: var(--green);
        }
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
