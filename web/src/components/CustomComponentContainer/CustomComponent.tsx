/* eslint-disable import/no-unresolved */
import React from "react";
import styled from "styled-components";
import { Container, HeroWrapper } from "../../styles/Wrappers";
import ContactHero from "../Hero/ContactHero";

export const FullWidthCustomComponentContainer = styled(HeroWrapper)`
  flex-direction: column;
`;

export const CustomComponentContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export default function CustomComponent({ rows }) {
  const contentRows = (rows || []).filter((r) => !r.disabled);

  return (
    <FullWidthCustomComponentContainer>
      {contentRows.map((row) => {
        let component = null;
        switch (row._type) {
          case "contactHero":
            component = <ContactHero key={row._key} {...row} />;
            break;
          default:
            component = null;
        }
        return component;
      })}
    </FullWidthCustomComponentContainer>
  );
}
