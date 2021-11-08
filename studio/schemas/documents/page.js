export default {
  type: "document",
  name: "page",
  title: "Page",
  fieldsets: [
    {
      title: "Visibility",
      name: "visibility",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  initialValue: {
    includeInSitemap: true,
  },
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",

      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "content",
      type: "array",
      title: "Page sections",
      description: "Add, edit, and reorder sections",
      of: [
        { type: "hero" },
        { type: "grid" },
        { type: "equipmentGrid" },
        { type: "customComponentContainer" },
      ],
    },
    {
      title: "Use site title?",
      description:
        "Use the site settings title as page title instead of the title on the referenced page",
      name: "useSiteTitle",
      type: "boolean",
      fieldset: "visibility",
    },
    {
      title: "Include in sitemap",
      description: "For search engines. Will be generateed to /sitemap.xml",
      name: "includeInSitemap",
      type: "boolean",
      fieldset: "visibility",
    },
    {
      title: "Disallow in robots.txt",
      description: "Hide this route for search engines like google",
      name: "disallowRobots",
      type: "boolean",
      fieldset: "visibility",
    },
    {
      title: "Open graph",
      name: "openGraph",
      description: "These values populate meta tags",
      type: "openGraph",
      fieldset: "visibility",
    },
  ],
};
