async function createLandingPages(
  pathPrefix = "./",
  graphql,
  actions,
  reporter
) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            includeInSitemap
            disallowRobots
            _updatedAt(formatString: "MMM DD, YYYY")
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const pageEdges = (result.data.allSanityPage || {}).edges || [];

  pageEdges.forEach((edge) => {
    const {
      id,
      includeInSitemap,
      disallowRobots,
      _updatedAt,
      slug = {},
    } = edge.node;
    const path = [pathPrefix, slug.current, "/"].join("");
    reporter.info(`Creating landing page: ${path}`);

    createPage({
      path,
      component: require.resolve("./src/templates/page.js"),
      context: {
        id,
        includeInSitemap,
        disallowRobots,
        _updatedAt,
      },
    });
  });
}

async function createEquipmentPages(
  pathPrefix = "./",
  graphql,
  actions,
  reporter
) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityUsed(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            _updatedAt(formatString: "MMM DD, YYYY")
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const pageEdges = (result.data.allSanityUsed || {}).edges || [];

  pageEdges.forEach((edge) => {
    const { id, _updatedAt, slug = {} } = edge.node;
    const path = [pathPrefix, slug.current, "/"].join("");
    reporter.info(`Creating landing page: ${path}`);

    createPage({
      path,
      component: require.resolve("./src/templates/usedPage.js"),
      context: {
        id,
        _updatedAt,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createLandingPages("/", graphql, actions, reporter);
  await createEquipmentPages("/equipment/", graphql, actions, reporter);
};
