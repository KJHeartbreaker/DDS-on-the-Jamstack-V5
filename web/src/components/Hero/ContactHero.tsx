/* eslint-disable import/no-unresolved */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faInbox,
  // faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  ContactHeroContentContainer,
  ParaHeroContainer,
  FormSide,
  CopySide,
} from "./Hero.styles";
import ParaHero from "./ParaHero";
import ContactForm from "../ContactForm/ContactForm";

export default function ContactHero({
  illustration,
  backgroundColour,
  contactForm,
}) {
  const theme = backgroundColour ? backgroundColour : "";
  const phone = <FontAwesomeIcon icon={faPhone} />;
  const inbox = <FontAwesomeIcon icon={faInbox} />;
  // const envelope = <FontAwesomeIcon icon={faEnvelope} />;
  const { title } = contactForm;
  return (
    <ParaHeroContainer className={theme}>
      <ContactHeroContentContainer>
        <CopySide className={theme}>
          <h2>Get in Touch</h2>
          <p>
            For more information on our products and services give us a call or
            drop us a line. You can reach us by phone, email, or by filling out
            the form.{" "}
          </p>
          <div className="phone">
            <span>{phone}</span>
            <i className="fas fa-phone"></i>
            <a href="tel:1778220888">1 (778) 220-1888</a>
          </div>
          <div className="email">
            <span>{inbox}</span>
            <a href="mailto:sales@desertdrillingsupply.com">
              sales@desertdrillingsupply.com
            </a>
          </div>
          {/* <div className="mail">
            <span>{envelope}</span>
            <p>
              Desert Drilling Supply
              <br />
              RR4
              <br />
              Kamloops BC
              <br />
              V1S 1Z9
            </p>
          </div> */}
        </CopySide>
        <FormSide>
          <ContactForm title={title} />
        </FormSide>
      </ContactHeroContentContainer>
      <ParaHero illustration={illustration} />
    </ParaHeroContainer>
  );
}
