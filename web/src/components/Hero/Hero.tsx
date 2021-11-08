/* eslint-disable import/no-unresolved */
import React from "react";
import PortableText from "../portableText";
import CTALink from "../CTA/CTALink";

import {
  Wrapper,
  HeroContentContainer,
  LeftSide,
  RightSide,
  Centered,
  HeroCopy,
  ParaHeroContainer,
} from "./Hero.styles";
import Figure from "../Figure/Figure";
import ParaHero from "./ParaHero";

export default function Hero({
  label,
  heading,
  tagline,
  cta,
  illustration,
  singleColumn,
  backgroundColour,
}) {
  const theme = backgroundColour ? backgroundColour : "";
  return (
    <>
      <Wrapper className={theme}>
        {singleColumn ? (
          <ParaHeroContainer>
            <Centered className={theme}>
              <h3 className="hero-label">{label}</h3>
              <h1 className="hero-title">{heading}</h1>
              {tagline && (
                <HeroCopy>
                  <PortableText blocks={tagline.portableTextBlock} />
                </HeroCopy>
              )}
              {cta && cta.title && <CTALink {...cta} />}
            </Centered>
            <ParaHero illustration={illustration} />
          </ParaHeroContainer>
        ) : (
          <HeroContentContainer>
            <LeftSide className={theme}>
              <h3 className="hero-label">{label}</h3>
              <h1 className="hero-title">{heading}</h1>
              {tagline && (
                <div>
                  <PortableText blocks={tagline.portableTextBlock} />
                </div>
              )}
              {cta && cta.title && <CTALink {...cta} />}
            </LeftSide>
            <RightSide>
              {illustration && (
                <Figure
                  asset={illustration.asset}
                  alt={illustration.alt}
                  {...illustration}
                />
              )}
            </RightSide>
          </HeroContentContainer>
        )}
      </Wrapper>
    </>
  );
}
