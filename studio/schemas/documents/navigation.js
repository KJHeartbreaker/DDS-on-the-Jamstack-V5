export default {
  type: "document",
  name: "nav",
  title: "Navigation",
  __experimental_actions: ["update", "create", "delete", "publish"],
  fields: [
    {
      type: "string",
      name: "title",
    },
    // {
    //   type: "array",
    //   name: "navMenuItems",
    //   of: [{ type: "cta" }],
    // },
  ],
};
