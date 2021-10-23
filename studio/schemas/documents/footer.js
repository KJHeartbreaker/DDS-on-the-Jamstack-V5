export default {
  type: "document",
  name: "footer",
  title: "Footer",
  __experimental_actions: ["update", "create", "delete", "publish"],
  fields: [
    {
      type: "string",
      name: "title",
    },
    // {
    //   type: "array",
    //   name: "footerLinks",
    //   of: [{ type: "cta" }],
    // },
  ],
};
