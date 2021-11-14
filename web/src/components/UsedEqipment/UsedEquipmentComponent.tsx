/* eslint-disable import/no-unresolved */
import React from "react";
import PortableText from "../portableText";
import SwipeableTextMobileStepper from "../Carousel/Carousel";
import Figure from "../Figure/Figure";

import FormModal from "../Modal/FormModal";
import { UsedEquipmentWrapper, Panel, Panels } from "./UsedEquipment.styles";

const formatCurrency = (num) => {
  return "$" + (num / 100).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export default function UsedEquipmentComponent({
  title,
  itemNumber,
  _rawTagline,
  _rawImages,
  price,
}) {
  return (
    <UsedEquipmentWrapper>
      {title && <h1>{title}</h1>}
      <Panels>
        <Panel>
          {itemNumber && <h3>Item Number: {itemNumber}</h3>}
          <PortableText blocks={_rawTagline.portableTextBlock} />
          {price ? (
            <>
              <h3>
                <em className="price">{formatCurrency(price)}</em>
              </h3>
            </>
          ) : (
            <>
              <h3>
                <em className="price">Call for pricing</em>
              </h3>
            </>
          )}
          <FormModal />
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
