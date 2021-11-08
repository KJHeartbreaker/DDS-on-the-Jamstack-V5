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
  _rawTagline,
  _rawImages,
  price,
}) {
  return (
    <UsedEquipmentWrapper>
      {title && <h1>{title}</h1>}
      <Panels>
        <Panel>
          {_rawTagline && (
            <>
              <PortableText blocks={_rawTagline.portableTextBlock} />
              {price ? (
                <>
                  <p>
                    <em className="price">{formatCurrency(price)}</em>
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <em className="price">Call for pricing</em>
                  </p>
                </>
              )}
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
