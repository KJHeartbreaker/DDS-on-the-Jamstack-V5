import { FiGrid, FiHelpCircle } from "react-icons/fi";

export default {
  title: "Content Row",
  name: "grid",
  type: "object",
  icon: FiGrid,
  fields: [
    // {
    //   name: "gridNote",
    //   type: "note",
    //   options: {
    //     icon: FiHelpCircle,
    //     headline: "What’s this",
    //     message: `Each content row is set up to accommodate 1-4 columns. Contact forms are only recommended if there are two content blocks. Otherwise, use the text block.`,
    //   },
    // },
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
