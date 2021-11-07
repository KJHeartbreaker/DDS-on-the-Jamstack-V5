/* eslint-disable import/no-unresolved */
import React from "react";
import PortableText from "../portableText";
import SwipeableTextMobileStepper from "../Carousel/Carousel";
import Figure from "../Figure/Figure";

import FormModal from "../Modal/FormModal";
import { UsedEquipmentWrapper, Panel, Panels } from "./UsedEquipment.styles";

export default function UsedEquipmentComponent({
  title,
  _rawTagline,
  _rawImages,
}) {
  return (
    <UsedEquipmentWrapper>
      {title && <h1>{title}</h1>}
      <Panels>
        <Panel>
          {_rawTagline && (
            <>
              <PortableText blocks={_rawTagline.portableTextBlock} />
              <FormModal />
            </>
          )}
        </Panel>
        <Panel>
          {_rawImages.length > 1 ? (
            <SwipeableTextMobileStepper images={_rawImages} />
          ) : (
            <Figure
              asset={_rawImages[0].asset}
              alt={_rawImages[0].alt}
              {..._rawImages[0]}
            />
          )}
        </Panel>
      </Panels>
    </UsedEquipmentWrapper>
  );
}
