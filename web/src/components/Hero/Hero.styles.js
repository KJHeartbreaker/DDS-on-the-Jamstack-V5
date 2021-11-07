import styled from "styled-components";
import { device } from "../../styles/Breakpoints";
import { Container, HeroWrapper } from "../../styles/Wrappers";

export const HeroContentContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${device.sm} {
    flex-direction: row;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ParaHeroContainer = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .react-parallax {
    width: 100%;
    height: 100vh;

    .react-parallax-background-children {
      width: 100%;
    }
  }
`;

export const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 800px;
  order: 2;
  padding: 24px;
  width: 100%;
  position: absolute;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const HeroCopy = styled.div`
  width: 100%;

  @media ${device.sm} {
    width: 60%;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  order: 2;
  padding: 24px;

  @media ${device.sm} {
    width: 40%;
    order: 1;
    margin-bottom: unset;
    padding-left: 0;
  }
`;

export const RightSide = styled.div`
  display: flex;
  width: 100%;
  order: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  @media ${device.sm} {
    width: 60%;
    order: 2;
    padding-right: 0;
  }
`;

export const ContactHeroContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 1200px;
  order: 2;
  padding: 24px;
  width: 100%;
  position: absolute;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.4);

  ${LeftSide} {
    width: 50%;

    h2,
    p,
    a {
      color: #fff;
    }

    .phone,
    .email,
    .mail {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding-bottom: 10px;

      p {
        margin: 0;
      }

      span {
        font-size: 1.3em;
        padding-right: 20px;
        color: var(--blue);
      }
    }
  }

  ${RightSide} {
    width: 50%;

    /* form {
      width: 500px;
      margin: 20px;

      > div {
        position: relative;
        overflow: hidden;
      }

      input,
      textarea {
        width: 100%;
        border: 2px solid gray;
        background: none;
        position: relative;
        top: 0;
        left: 0;
        z-index: 1;
        padding: 8px 12px;
        outline: 0;
        &:valid {
          // Hides the label
          background: white;
        }
        &:focus {
          border-color: #f06d06;
        }
        &:focus + label {
          background: #f06d06;
          color: white;
          font-size: 70%;
          padding: 1px 6px;
          z-index: 2;
          text-transform: uppercase;
        }
      }

      label {
        transition: background 0.2s, color 0.2s, top 0.2s, bottom 0.2s,
          right 0.2s, left 0.2s;
        position: absolute;
        color: #999;
        padding: 7px 6px;
      }

      textarea {
        display: block;
        resize: vertical;
      }
    } */
  }
`;

export const Wrapper = styled(HeroWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  &.brown {
    background-image: linear-gradient(90deg, #2e1b0c 0%, #e3c4a8 100%);
  }

  &.darkBlue {
    background-image: linear-gradient(90deg, #3d547a 0%, #7c8cc4 100%);
  }

  &.darkBlueSolid {
    background-color: #3d547a;
  }

  &.brownSolid {
    background-color: #2e1b0c;
  }

  &.tan {
    background-color: #e3c4a8;
  }

  &.lightBlue {
    background-color: #b4d4ec;
  }

  @media ${device.sm} {
    margin-bottom: "0px";
  }

  ${Centered}, ${LeftSide} {
    h1.hero-title {
      margin: 20px 0;
    }

    h3.hero-label {
      text-transform: uppercase;
      letter-spacing: 7px;
      font-size: 14px;

      @media ${device.sm} {
        letter-spacing: 10px;
        font-size: 16px;
      }
    }

    &.brown,
    &.brownSolid,
    &.darkBlue,
    &.darkBlueSolid {
      h1,
      h2,
      h3,
      h4,
      h5,
      p {
        color: #fff;
      }
    }

    &.brown,
    &.brownSolid,
    &.tan {
      button {
        background-color: var(--dark-blue);

        &:hover {
          background-color: var(--light-blue);
        }
      }
    }

    &.darkBlue,
    &.darkBlueSolid {
      button {
        background-color: var(--brown);

        &:hover {
          background-color: var(--tan);
        }
      }
    }
  }
`;
