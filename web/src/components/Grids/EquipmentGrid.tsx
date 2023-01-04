/* eslint-disable import/no-unresolved */
import { Link } from "gatsby";
import React from "react";
import Figure from "../Figure/Figure";
import { StaticImage } from "gatsby-plugin-image"
import { EquipmentGridCard, EquipmentGridContainer } from "./Grid.styles";

export default function EquipmentGrid({ title, content }) {
  return (
    <>
      <EquipmentGridContainer>
        <h1>{title}</h1>
        {content.map((el) => (
          <EquipmentGridCard key={el._key}>
            <Link to={`/equipment/${el.equipment.slug.current}`}>
              <h3>{el.equipment.title}</h3>
              ...Read More
              {el.equipment.images ? (
                <Figure
                  asset={el.equipment.images[0].asset}
                  alt={el.equipment.images[0].alt}
                  {...el.equipment.images[0]}
                />
              ) : (
                <StaticImage src="../../static/icon.svg" alt="Contact for images" />
              )}
            </Link>
          </EquipmentGridCard>
        ))}
      </EquipmentGridContainer>
    </>
  );
}
