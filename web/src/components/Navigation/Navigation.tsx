/* eslint-disable import/no-unresolved */
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import CTALink from "../CTA/CTALink";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import {
  Nav,
  PrimaryNav,
  MenuItems,
  LogoContainer,
  MobileMenuIcon,
  MobileMenuDropdown,
} from "./Navigation.styles";

import Logo from "../Logo/Logo";

export default function PrimaryNavigation({ path, crumbs }) {
  const data = useStaticQuery(graphql`
    query PrimaryNavigationQuery {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
      }
      nav: sanityNav(_id: { eq: "primaryNavigation" }) {
        _key
        navMenuItems {
          link
          kind
          title
          _key
          landingPageRoute {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const { navMenuItems } = data.nav;
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.position = "relative";
    }
  }, [menuOpen]);

  useEffect(() => {
    if (crumbs) {
      crumbs.map((crumb) => {
        if (path.includes(crumb.crumbLabel)) {
          const navLinks = document.querySelectorAll(`nav a`);
          navLinks.forEach((link) => {
            if (crumb.pathname.includes(link.pathname)) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
        if (menuOpen) {
          openMenu();
        }
      });
    }
  }, [crumbs, path]);

  return (
    <>
      <Nav id="header">
        <PrimaryNav>
          <LogoContainer>
            <Link id="siteTitle" to="/" aria-label="Return to the homepage">
              <Logo />
              <div>
                <p className="logo-top">Desert</p>
                <p className="logo-bottom">Drilling Supply</p>
              </div>
            </Link>
          </LogoContainer>
          {!isMobile ? (
            <>
              <MenuItems>
                {navMenuItems.map((navItem) => (
                  <li key={navItem._key}>
                    <CTALink
                      route={navItem.landingPageRoute.route}
                      link={navItem.landingPageRoute.link}
                      landingPageRoute={navItem.landingPageRoute}
                      title={navItem.title}
                      kind={navItem.kind}
                      activeClassName="active"
                    />
                  </li>
                ))}
              </MenuItems>
            </>
          ) : (
            <MobileMenuIcon onClick={openMenu} menuOpen={menuOpen}>
              <div />
              <div />
              <div />
            </MobileMenuIcon>
          )}
        </PrimaryNav>
        {menuOpen && (
          <MobileMenuDropdown>
            <ul>
              {navMenuItems.map((navItem) => (
                <li key={navItem._key}>
                  <CTALink
                    route={navItem.landingPageRoute.route}
                    link={navItem.landingPageRoute.link}
                    landingPageRoute={navItem.landingPageRoute}
                    title={navItem.title}
                    kind={navItem.kind}
                    activeClassName="active"
                  />
                </li>
              ))}
            </ul>
          </MobileMenuDropdown>
        )}
      </Nav>
    </>
  );
}
