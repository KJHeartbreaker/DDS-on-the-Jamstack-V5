import { graphql } from "gatsby";

export const NavigationFragment = graphql`
  fragment NavLinks on SanityNav {
    _key
    navMenuItems {
      link
      kind
      title
      landingPageRoute {
        title
        slug {
          current
          _key
        }
      }
    }
  }
`;
