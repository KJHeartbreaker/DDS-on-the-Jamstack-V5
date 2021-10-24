/* eslint-disable import/no-unresolved */
import React from "react";
import { Link } from "gatsby";
import PrimaryNavigation from "../components/Navigation/Navigation";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import { Container } from "../styles/Wrappers";
// import fourOhFourImg from "../assets/images/robot-page-error.png";

export default function NotFoundPage({ path, crumbs }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <PrimaryNavigation path={path} crumbs={crumbs} />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#3d547a" }}>ERROR 404</h1>
        {/* <img src={fourOhFourImg} alt="Sad Robot" /> */}
        <p style={{ textAlign: "center" }}>
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
        <Link to="/" className="button">
          Return to homepage
        </Link>
      </Container>
      {/* <Footer /> */}
    </>
  );
}
