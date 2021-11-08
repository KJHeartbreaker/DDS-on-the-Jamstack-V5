import React from "react";
import { FooterBar } from "./Footer.styles";

export default function Footer() {
  return (
    <FooterBar>
      <p>&copy; {new Date().getFullYear()} — Desert Drilling Supply</p>
    </FooterBar>
  );
}
