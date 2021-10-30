import React from "react";
import { graphql } from "gatsby";

// Components
import GraphQLErrorList from "../components/graphql-error-list";
import Hero from "../components/Hero/Hero";
// import Grid from "../components/Grids/Grid";
import EssEeOh from "../components/seo";
import LayoutGrid from "../components/Grids/LayoutGrid";
import EquipmentGrid from "../components/Grids/EquipmentGrid";

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      title
      ...PageInfo
      slug {
        current
      }
      _type
      openGraph {
        title
        description
        image {
          ...SanityImage
        }
      }
    }
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
  }
`;

export default function Page(props) {
  const { data, errors } = props;

  if (errors) {
    return (
      <>
        <GraphQLErrorList errors={errors} />
      </>
    );
  }

  const { page, site } = data || {};

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  // TODO - Try to destructure props instead of spreading. There is a lot of information being passed that is not necessary for the components to render.

  const content = (page._rawContent || [])
    .filter((c) => !c.disabled)
    .map((c, i) => {
      let el = null;
      switch (c._type) {
        case "hero":
          el = <Hero key={c._key} {...c} />;
          break;
        case "grid":
          el = <LayoutGrid key={c._key} {...c} />;
          break;
        case "equipmentGrid":
          el = <EquipmentGrid key={c._key} {...c} />;
          break;
        // case "customComponentContainer":
        //   el = <CustomComponent key={c._key} fullWidth={c.fullWidth} {...c} />;
        //   break;
        default:
          el = null;
      }
      return el;
    });

  let title = "";
  let description = "";
  let image = {};

  if (page.openGraph) {
    if (page.openGraph.title) {
      title = page.openGraph.title;
    } else {
      title = site.title;
    }

    if (page.openGraph.description) {
      description = page.openGraph.description;
    } else {
      description = site.description;
    }

    if (page.openGraph.image) {
      image = page.openGraph.image;
    } else {
      image = site.openGraph.image;
    }
  } else {
    title = site.title;
    description = site.description;
    image = site.openGraph.image;
  }

  return (
    <>
      <EssEeOh
        title={title}
        description={description}
        keywords={site.keywords}
        image={image}
      />
      {content}
    </>
  );
}
