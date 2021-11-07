/* eslint-disable import/no-unresolved */
import { Link } from "gatsby";
import React from "react";
import Figure from "../Figure/Figure";
import { EquipmentGridCard, EquipmentGridContainer } from "./Grid.styles";

export default function EquipmentGrid({ content }) {
  return (
    <EquipmentGridContainer>
      {content.map((el) => (
        <EquipmentGridCard key={el._key}>
          <Link to={`/equipment/${el.equipment.slug.current}`}>
            <h3>{el.equipment.title}</h3>
            ...Read More
            <Figure
              asset={el.equipment.images[0].asset}
              alt={el.equipment.images[0].alt}
              {...el.equipment.images[0]}
            />
          </Link>
        </EquipmentGridCard>
      ))}
    </EquipmentGridContainer>
  );
}
