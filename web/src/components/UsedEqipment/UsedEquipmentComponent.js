/* eslint-disable import/no-unresolved */
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PortableText from "../portableText";
import SwipeableTextMobileStepper from "../Carousel/Carousel";
import Figure from "../Figure/Figure";
import { Grid } from "@mui/material";

import FormModal from "../Modal/FormModal";

export default function UsedEquipmentComponent({
  title,
  _rawTagline,
  _rawImages,
}) {
  return (
    <Box>
      {title && <h1>{title}</h1>}
      <Grid container>
        <Grid item xs={12} sm={5}>
          {_rawTagline && (
            <>
              <PortableText blocks={_rawTagline.portableTextBlock} />
              <FormModal />
            </>
          )}
        </Grid>
        <Grid item xs={12} sm={7}>
          {_rawImages.length > 1 ? (
            <SwipeableTextMobileStepper images={_rawImages} />
          ) : (
            <Figure
              asset={_rawImages[0].asset}
              alt={_rawImages[0].alt}
              {..._rawImages[0]}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
