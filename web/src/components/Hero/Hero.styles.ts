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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 100vh; */

  @media ${device.md} {
    flex-direction: row;
    height: 100vh;
  }

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
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const HeroCopy = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;

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

export const CopySide = styled(LeftSide)`
  order: 1;
  @media ${device.sm} {
  }
`;
export const FormSide = styled(RightSide)`
  order: 2;
  @media ${device.sm} {
  }
`;

export const ContactHeroContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  order: 2;
  padding: 24px;
  width: 100%;
  position: relative;
  z-index: 10;
  background-color: var(--brown);

  @media ${device.md} {
    max-width: 950px;
    position: absolute;
    flex-direction: row;
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media ${device.lg} {
    max-width: 1200px;
  }

  ${CopySide} {
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

  ${CopySide},
  ${FormSide} {
    flex: 1 0 100%;
    box-sizing: border-box;
    width: 100%;
    padding: 0;

    @media ${device.md} {
      padding: 10px;
      flex: 1 0 50%;
    }
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

  &.lightBlueSolid {
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
