/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import Layout from "./src/containers/Layout/Layout";
import GlobalStyles from "./src/styles/GlobalStyles";
import Typography from "./src/styles/Typography";

export function wrapPageElement({ element, props }) {
  const { data } = props;

  if (!data || !data.page || data.allSitePage) {
    return;
  }

  const { _type } = data.page;

  // TODO - this line is for the 404 page because data.page doesn't exist

  return (
    <>
      <GlobalStyles />
      <Typography />
      {_type === "page" && <Layout {...props}>{element}</Layout>}
    </>
  );
}
