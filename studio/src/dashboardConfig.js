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
                  buildHookId:
                    "61743f113dbcaf08de7cad58",
                  title: "Sanity Studio",
                  name: "dds-on-the-jamstack-v-5-studio",
                  apiId: "ba3efacb-2261-42e3-b10b-ea358fcfd361",
                },
                {
                  buildHookId: "61743f11eba7b50f21aac15a",
                  title: "Blog Website",
                  name: "dds-on-the-jamstack-v-5",
                  apiId: "02942a43-5ca3-4905-a03b-d6fee08344d7",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/KJHeartbreaker/DDS-on-the-Jamstack-V5",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://dds-on-the-jamstack-v-5.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
