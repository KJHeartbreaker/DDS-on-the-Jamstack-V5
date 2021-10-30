import { FcRating as icon } from "react-icons/fc";

export default {
  type: "object",
  name: "customComponentContainer",
  title: "Custom Component",
  icon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Custom Component",
    },
    {
      type: "array",
      name: "rows",
      of: [{ type: "contactHero" }],
    },
    {
      name: "fullWidth",
      title: "Full Width",
      description:
        "This should only be selected if the component is not designed to fit within the standard container (ie: custom hero component, etc...).",
      type: "boolean",
    },
    {
      name: "disabled",
      title: "Disabled",
      description:
        "Setting this to true will disable the component, but not delete it.",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      title: "title",
      content: "content.0.title",
    },
    prepare({ title, content }) {
      return {
        title: title ? `Custom Component: ${title}` : `Custom Component`,
        subtitle: content,
      };
    },
  },
};
