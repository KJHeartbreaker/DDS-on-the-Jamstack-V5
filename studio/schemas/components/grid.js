import { FiGrid, FiHelpCircle } from "react-icons/fi";

const getBlockNames = (types) => {
  const typeNames = types.map((type) => {
    switch (type) {
      case "pagePortableText":
        return "Text Block";
      case "contactForm":
        return "Contact Form";
      default:
        return null;
    }
  });

  return typeNames.join(" + ");
};

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
    //     message: `Each content row is set up to accommodate 1-4 columns. Contact forms and accordions are only recommended if there are two content blocks. Otherwise, use the text block.`,
    //   },
    // },
    {
      title: "Blocks",
      name: "blocks",
      type: "array",
      of: [
        // { type: "pagePortableText" },
        // { type: "contactForm" },
        { type: "mainImage" },
      ],
    },
  ],
  preview: {
    select: {
      blocks: "blocks",
    },
    prepare({ blocks }) {
      console.log("blocks: ", blocks);

      const name = getBlockNames(blocks.map((col) => col._type));

      console.log("name: ", name);

      const image = (blocks[0].content || []).find(
        (block) => block._type === "mainImage"
      );

      return {
        title: `Row with ${blocks.length} column${
          blocks.length > 1 ? "s" : ""
        }`,
        subtitle: name,
        media: image,
      };
    },
  },
};
