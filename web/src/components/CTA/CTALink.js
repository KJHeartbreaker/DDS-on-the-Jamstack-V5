import React from "react";
import { Link, navigate } from "gatsby";
import { PropTypes } from "prop-types";
import styled from "styled-components";

export const DDSButton = styled.button`
  &:hover {
    background-color: var(--light-blue);
  }
`;

export const DDSDownload = styled.a`
  background-color: var(--dark-blue);
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;

  /* font-size: var(--font-base-size); */
  &:hover {
    background-color: var(--blue);
  }
`;

const buttonNavigation = (target) => {
  const ext = target.includes("http");
  if (!ext) {
    navigate(`/${target}`);
  } else {
    window.location = target;
  }
};

export default function CTALink({
  // route,
  link,
  landingPageRoute,
  fileDownload,
  title,
  buttonActionClass,
  kind,
  activeClassName,
}) {
  let navigateTo = landingPageRoute.slug.current || link || "#";

  if (fileDownload && kind === "button") {
    return (
      <DDSDownload
        href={fileDownload.asset.url}
        download
        id="downloadFile"
        className="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </DDSDownload>
    );
  }

  if (kind === "button") {
    return (
      <DDSButton
        id="navAction"
        type="button"
        onClick={() => buttonNavigation(navigateTo)}
        className={buttonActionClass || ""}
      >
        {title}
      </DDSButton>
    );
  }

  // External
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    );
  }

  return (
    <Link to={`/${navigateTo}`} activeClassName={activeClassName}>
      {title}
    </Link>
  );
}

CTALink.propTypes = {
  route: PropTypes.string,
  link: PropTypes.string,
  kind: PropTypes.string,
  title: PropTypes.string,
  buttonActionClass: PropTypes.string,
  activeClassName: PropTypes.string,
  landingPageRoute: PropTypes.object,
  fileDownload: PropTypes.object,
  blogLink: PropTypes.bool,
};
