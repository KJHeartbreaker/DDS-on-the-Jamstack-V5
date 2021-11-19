/* eslint-disable import/no-unresolved */
import React from "react";
import { ReactFormWrapper } from "./ContactForm.styles";

export default function ThankYou() {
  return (
    <ReactFormWrapper>
      <h2>Thank you!</h2>
      {/* <h2>Thank you, {name}!</h2> */}
      <p>
        We have received your message, and will be in contact with you shortly!
      </p>
    </ReactFormWrapper>
  );
}
