/* eslint-disable import/no-unresolved */
import { Link } from "gatsby";
import React from "react";
import Figure from "../Figure/Figure";
import { StaticImage } from "gatsby-plugin-image"
import { EquipmentGridCard, EquipmentGridContainer } from "./Grid.styles";

export default function EquipmentGrid({ title, content }) {
  const staticImg = 'https://cdn.sanity.io/images/je1gp4wx/production/3ee840906f6c5d1c66b4ff9a2f2f015b9a0f6a6e-362x294.svg'

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
                <StaticImage src={staticImg} alt="Contact for more information" />
              )}
            </Link>
          </EquipmentGridCard>
        ))}
      </EquipmentGridContainer>
    </>
  );
}
