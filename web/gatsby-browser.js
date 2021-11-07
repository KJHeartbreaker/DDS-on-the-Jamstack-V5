import React from "react";
import Layout from "./src/containers/Layout/Layout";
import GlobalStyles from "./src/styles/GlobalStyles";
import Typography from "./src/styles/Typography";

export function wrapPageElement({ element, props }) {
  const { data } = props;

  // TODO - this line is for the 404 page because data.page doesn't exist

  if (!data || !data.page || !data.post || data.allSitePage) {
    return;
  }

  if (data.post) {
    return (
      <>
        <GlobalStyles />
        <Typography />
        <Layout {...props}>{element}</Layout>
      </>
    );
  }

  const { _type } = data.page;

  return (
    <>
      <GlobalStyles />
      <Typography />
      {_type === "page" && <Layout {...props}>{element}</Layout>}
    </>
  );
}
