import React from "react";
import { Parallax, Background } from "react-parallax";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Figure from "../Figure/Figure";

export default function ParaHero({ illustration }) {
  const isMobile = useMediaQuery("(max-width: 992px)");
  return (
    <>
      {isMobile ? (
        <Background className="custom-bg">
          <Figure
            asset={illustration.asset}
            alt={illustration.alt}
            {...illustration}
          />
        </Background>
      ) : (
        <Parallax strength={300}>
          <Background className="custom-bg">
            <Figure
              asset={illustration.asset}
              alt={illustration.alt}
              {...illustration}
            />
          </Background>
        </Parallax>
      )}
    </>
  );
}
