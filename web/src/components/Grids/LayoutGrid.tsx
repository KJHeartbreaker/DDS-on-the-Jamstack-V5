/* eslint-disable import/no-unresolved */
import * as React from "react";
import { GridComponentContainer, Panel, XColumnsUp } from "./Grid.styles";
import PortableText from "../portableText";
import Figure from "../Figure/Figure";
import ContactForm from "../ContactForm/ContactForm";

export default function LayoutGrid({ blocks }) {
  const gridColumns = blocks.length;

  let columns;

  if (gridColumns === 2) {
    columns = "twoUp";
  }

  if (gridColumns === 3) {
    columns = "threeUp";
  }

  if (gridColumns === 4) {
    columns = "fourUp";
  }

  return (
    <GridComponentContainer>
      <XColumnsUp className={columns}>
        {blocks.map((block, i) => (
          <Panel key={i}>
            {block._type === "pagePortableText" && (
              <PortableText
                className="copyBlock"
                blocks={block.portableTextBlock}
                {...block}
              />
            )}
            {block._type === "mainImage" && (
              <Figure asset={block.asset} alt={block.alt} {...block} />
            )}
            {block._type === "contactForm" && <ContactForm {...block} />}
          </Panel>
        ))}
      </XColumnsUp>
    </GridComponentContainer>
  );
}
