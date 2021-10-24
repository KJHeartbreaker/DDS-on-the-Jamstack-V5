import React from "react";
import { graphql } from "gatsby";

import Errors from "../components/Errors";
import Page from "../templates/page";

export const query = graphql`
  # fragment SanityImage on SanityMainImage {
  #   crop {
  #     _key
  #     _type
  #     top
  #     bottom
  #     left
  #     right
  #   }
  #   hotspot {
  #     _key
  #     _type
  #     x
  #     y
  #     height
  #     width
  #   }
  #   asset {
  #     _id
  #   }
  # }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      openGraph {
        title
        description
        image {
          ...SanityImage
        }
      }
    }
    page: sanityPage(_id: { regex: "/homepage/" }) {
      ...PageInfo
      _type
    }
    # posts: allSanityPost(
    #   limit: 6
    #   sort: { fields: [publishedAt], order: DESC }
    #   filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    # ) {
    #   edges {
    #     node {
    #       id
    #       publishedAt
    #       mainImage {
    #         ...SanityImage
    #         alt
    #       }
    #       title
    #       _rawExcerpt
    #       slug {
    #         current
    #       }
    #     }
    #   }
    # }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return <Errors errors={errors} />;
  }

  return <Page data={data} />;
};

export default IndexPage;
