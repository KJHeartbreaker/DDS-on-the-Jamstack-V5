export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "61743f11eba7b50f21aac15a",
                  title: "DDS Website",
                  name: "dds-on-the-jamstack-v-5",
                  apiId: "02942a43-5ca3-4905-a03b-d6fee08344d7",
                },
              ],
            },
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      layout: { width: "medium" },
    },
  ],
};
