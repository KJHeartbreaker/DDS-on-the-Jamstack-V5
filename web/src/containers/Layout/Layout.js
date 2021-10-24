/* eslint-disable import/no-unresolved */
import React from "react";
import { PropTypes } from "prop-types";
import { PageContentWrapper } from "../../styles/Wrappers";
import PrimaryNavigation from "../../components/Navigation/Navigation";

export default function Layout({ children, path, pageContext }) {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <>
      <PrimaryNavigation path={path} crumbs={crumbs} />
      <PageContentWrapper>{children}</PageContentWrapper>
      {/* <Footer /> */}
    </>
  );
}

Layout.propTypes = {
  path: PropTypes.string,
  dbg: PropTypes.bool,
  pageContext: PropTypes.object,
  children: PropTypes.any,
};
