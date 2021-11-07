import React from "react";
import Layout from "./src/containers/Layout/Layout";
import GlobalStyles from "./src/styles/GlobalStyles";
import Typography from "./src/styles/Typography";

export function wrapPageElement({ element, props }) {
  const { data } = props;

  // TODO - this line is for the 404 page because data.page doesn't exist

  if (!data || (!data.page && !data.post) || data.allSitePage) {
    return;
  } else {
    return (
      <>
        <GlobalStyles />
        <Typography />
        <Layout {...props}>{element}</Layout>
      </>
    );
  }
}
