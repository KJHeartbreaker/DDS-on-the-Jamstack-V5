/* eslint-disable react/display-name */
import React from "react";
import Figure from "./Figure/Figure";
// import SanityImage from "gatsby-plugin-sanity-image";
import CTALink from "../components/CTA/CTALink";

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: ({ node }) => (
      <Figure asset={node.asset} {...node} alt={node.alt} />
    ),
    cta: ({ node }) => <CTALink {...node} />,
    // mainImage: ({ node }) => (
    //   <SanityImage asset={node.asset} {...node} alt={node.alt} />
    // ),
    illustration: ({ node }) => (
      <Figure asset={node.image.asset} {...node} alt={node.image.alt} />
    ),
  },
  marks: {
    internalLink: ({ mark }) => (
      <CTALink route={mark.item.slug.current} title={mark.item.title} blank />
    ),
    link: ({ mark, children }) => {
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noreferrer noopener">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  },
};

export default serializers;
