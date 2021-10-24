import styled from "styled-components";
import { device } from "./Breakpoints";

export const PageContentWrapper = styled.main`
  display: block;
  background: ${(props) => `url(${props.bg}) repeat top center;`};
`;

// HeroWrapper is full width, and used for Hero components, and Wave components
export const HeroWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

// ComponentWrapper uses the breakpoints set in breakpoints.js. It's for the components that aren't full width on larger screens, but instead are inside of a wrapper.

export const Container = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  margin-bottom: 60px;

  @media ${device.sm} {
    max-width: 720px;
    margin-bottom: 100px;
  }

  @media ${device.md} {
    max-width: 960px;
  }

  @media ${device.lg} {
    max-width: 1280px;
  }

  @media ${device.xl} {
    max-width: 1440px;
  }

  @media ${device.xxl} {
    max-width: 1600px;
  }
`;
