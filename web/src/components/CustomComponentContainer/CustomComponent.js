import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import { Container, HeroWrapper } from "../../styles/Wrappers";

export const FullWidthCustomComponentContainer = styled(HeroWrapper)`
  flex-direction: column;
`;

export const CustomComponentContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export default function CustomComponent({ rows, fullWidth }) {
  const contentRows = (rows || []).filter((r) => !r.disabled);

  return (
    <>
      {fullWidth ? (
        <FullWidthCustomComponentContainer>
          {contentRows.map((row) => {
            let component = null;
            switch (row._type) {
              case "vsmHero":
                component = <VSMHero key={row._key} {...row} />;
                break;
              default:
                component = null;
            }
            return component;
          })}
        </FullWidthCustomComponentContainer>
      ) : (
        <CustomComponentContainer>
          {contentRows.map((row) => {
            let component = null;
            switch (row._type) {
              case "marketectureContainer":
                component = <Marketecture key={row._key} {...row} />;
                break;
              case "blogHomepageHeader":
                component = <BlogHero key={row._key} {...row} />;
                break;
              default:
                component = null;
            }
            return component;
          })}
        </CustomComponentContainer>
      )}
    </>
  );
}

CustomComponent.propTypes = {
  rows: PropTypes.array,
  fullWidth: PropTypes.bool,
};
