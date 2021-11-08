/* eslint-disable import/no-unresolved */
import React from "react";
import { PageContentWrapper } from "../../styles/Wrappers";
import PrimaryNavigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default function Layout({ children, path, pageContext }) {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <>
      <PrimaryNavigation path={path} crumbs={crumbs} />
      <PageContentWrapper>{children}</PageContentWrapper>
      <Footer />
    </>
  );
}
