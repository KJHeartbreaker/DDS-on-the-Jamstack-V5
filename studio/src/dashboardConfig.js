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
                  buildHookId: "61940aded6e409009c419b2d",
                  title: "DDS Website",
                  name: "admiring-allen-d046ea",
                  apiId: "54be34cb-565c-4a2c-8f71-c2c22b15ae2d",
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
