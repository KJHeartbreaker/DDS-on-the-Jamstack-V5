/* eslint-disable import/no-unresolved */
import * as React from "react";
import { GridComponentContainer, Panel, XColumnsUp } from "./Grid.styles";
import PortableText from "../portableText";
import Figure from "../Figure/Figure";
import ContactForm from "../ContactForm/ContactForm";

export default function LayoutGrid({ blocks }) {
  const { center } = blocks;
  const [centered, setCentered] = React.useState(false);
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

  console.log("blocks: ", blocks);

  return (
    <GridComponentContainer>
      <XColumnsUp className={columns}>
        {blocks.map((block, i) => (
          <Panel key={i} className={block.center ? "centered" : ""}>
            {block._type === "pagePortableText" && (
              <PortableText
                blocks={block.portableTextBlock}
                // centered={block.center ? () => setCentered(true) : null}
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
