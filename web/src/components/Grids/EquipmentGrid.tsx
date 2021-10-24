/* eslint-disable import/no-unresolved */
import React from "react";
import Figure from "../Figure/Figure";
import BasicModal from "../Modal/BasicModal";
import { EquipmentGridCard, EquipmentGridContainer } from "./Grid.styles";

export default function EquipmentGrid({ content }) {
  console.log("content: ", content);

  return (
    <EquipmentGridContainer>
      {content.map((el) => (
        <EquipmentGridCard key={el._key}>
          <h3>{el.equipment.title}</h3>
          <Figure
            asset={el.equipment.images[0].asset}
            alt={el.equipment.images[0].alt}
            {...el.equipment.images[0]}
          />
          <BasicModal key={el._key} {...el} />
        </EquipmentGridCard>
      ))}
    </EquipmentGridContainer>
  );
}
