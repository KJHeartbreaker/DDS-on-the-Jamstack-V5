/* eslint-disable import/no-unresolved */
import React, { useEffect } from "react";
import Portal from "./portal";
import CTALink from "../CTA/CTALink";
import PortableText from "../portableText";

const ModalCopy = ({ portableTextBlock }) => (
  <PortableText blocks={portableTextBlock} />
);

// export default function Modal ({ item, forgetModal }) {
export default function Modal({ item, forgetModal }) {
  useEffect(() => {
    const escape = (e) => {
      if (e.key === "Escape") forgetModal();
    };

    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);

  return (
    <Portal>
      <h1>Portal</h1>
    </Portal>
  );
}
