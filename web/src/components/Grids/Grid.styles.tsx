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
`;

// export const CopyPanel = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   order: 2;

//   img {
//     max-width: 100px;
//   }

//   p.label,
//   h2.field-header {
//     display: none;
//   }

//   div.platforms {
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;

//     a {
//       margin-right: 20px;
//       text-decoration: none;
//       cursor: pointer;
//     }
//   }

//   @media ${device.sm} {
//     padding: 24px;
//     order: unset;

//     p.label,
//     h2.field-header {
//       display: block;
//     }
//   }
// `;

export const FormPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;
  order: 3;

  form.mktoForm {
    width: 100%;

    div.mktoFormRow {
      width: 100%;
      /* height: 40px; */
      /* margin-bottom: 25px; */

      div.mktoFieldWrap {
        display: flex;
        flex-direction: column;

        @media ${device.sm} {
          display: grid;
          grid-template-columns: 150px 1fr;
        }

        label.mktoLabel {
          width: 100%;
          margin-bottom: 10px;

          @media ${device.sm} {
            margin-bottom: 0;
          }
        }

        input.mktoField {
          width: 100%;
          padding: 0;
          margin: 0;
          border: unset;
          border-bottom: 1px solid var(--grey);
        }
      }
    }

    div.mktoButtonRow {
      width: 100%;

      span.mktoButtonWrap mktoSimple {
        margin: 0;
      }

      button.mktoButton {
        width: 100%;
        background-color: var(--green);
        color: #fff;
        border: unset;
        cursor: pointer;
        padding: 10px;
      }
    }
  }
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

  p.label,
  h2.field-header {
    display: block;
  }

  @media ${device.sm} {
    order: unset;
    flex-direction: row;

    p.label,
    h2.field-header {
      display: none;
    }
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
      /* width: 100%; */
    }
  }
`;

export const EquipmentGridContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  h3 {
    margin-bottom: 20px;
  }

  @media ${device.sm} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
