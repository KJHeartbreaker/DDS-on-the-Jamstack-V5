import React from "react";
import { Parallax, Background } from "react-parallax";
import Figure from "../Figure/Figure";

export default function ParaHero({ illustration }) {
  return (
    <Parallax strength={300}>
      <Background className="custom-bg">
        <Figure
          asset={illustration.asset}
          alt={illustration.alt}
          {...illustration}
        />
      </Background>
    </Parallax>
  );
}
