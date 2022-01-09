import styled from "styled-components";
import { device } from "../../styles/Breakpoints";
import { Container } from "../../styles/Wrappers";

export const UsedEquipmentWrapper = styled(Container)`
  h1 {
    margin-bottom: 40px;
    text-align: center;
  }
`;

export const Panels = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media ${device.sm} {
    grid-template-columns: 40% 60%;
  }
`;

export const Panel = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
  }

  p.price {
    text-decoration: italic;
  }
`;
