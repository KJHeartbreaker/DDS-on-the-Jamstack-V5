import styled from "styled-components";
import { device } from "../../styles/Breakpoints";
import { Container } from "../../styles/Wrappers";

export const GridComponentContainer = styled(Container)`
  /* width: 100%; */
  box-sizing: border-box;
`;

export const XColumnsUp = styled.div`
  display: grid;
  width: 100%;

  img {
    width: 100%;
  }

  &.twoUp {
    grid-template-columns: 100%;

    @media ${device.sm} {
      grid-template-columns: 50% 50%;
    }
  }

  &.threeUp {
    grid-template-columns: 100%;

    @media ${device.sm} {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  &.fourUp {
    grid-template-columns: 100%;

    @media ${device.sm} {
      grid-template-columns: 1fr 1fr;
    }

    @media ${device.lg} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;

export const Panel = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
  }

  a {
    margin: 0 auto;
  }

  &.centered {
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;

export const FormPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;
  order: 3;
`;

export const MediaPanel = styled.div`
  order: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img,
  video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  img {
    height: auto;
  }
`;

export const EquipmentGridCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px solid var(--brown);
  padding: 10px;
  box-sizing: border-box;

  .gatsby-image-wrapper.gatsby-image-wrapper-constrained {
    width: 100%;
  }

  @media ${device.sm} {
    img {
      height: 450px;
    }
  }
`;

export const EquipmentGridContainer = styled(Container)`
  h1 {
    grid-column: 1 / span 1;
    text-align: center;
    margin-bottom: 30px;

    @media ${device.sm} {
      grid-column: 1 / span 2;
    }

    @media ${device.lg} {
      grid-column: 1 / span 3;
    }
  }

  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  h3 {
    margin-bottom: 20px;
  }

  @media ${device.sm} {
    grid-template-columns: 50% 50%;
  }

  @media ${device.lg} {
    grid-template-columns: 33.33% 33.33% 33.33%;
  }
`;
