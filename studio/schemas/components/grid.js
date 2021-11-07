import { FiGrid } from "react-icons/fi";

export default {
  title: "Content Row",
  name: "grid",
  type: "object",
  icon: FiGrid,
  fields: [
    {
      title: "Blocks",
      name: "blocks",
      type: "array",
      of: [
        { type: "pagePortableText" },
        { type: "contactForm" },
        { type: "mainImage" },
      ],
    },
  ],
  preview: {
    select: {
      blocks: "blocks",
    },
    prepare({ blocks }) {
      return {
        title: `Row with ${blocks.length} column${
          blocks.length > 1 ? "s" : ""
        }`,
      };
    },
  },
};
