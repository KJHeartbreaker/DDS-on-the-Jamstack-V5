import { FcFlashOn as icon } from "react-icons/fc";

export default {
  type: "object",
  name: "hero",
  title: "Hero",
  icon,
  fields: [
    {
      name: "singleColumn",
      title: "Single Column",
      description:
        "The single column hero option will ignore the image and video settings, and all text will be centered.",
      type: "boolean",
    },
    {
      title: "Background Colour",
      type: "string",
      name: "backgroundColour",
      options: {
        list: [
          { title: "Brown", value: "brown" },
          { title: "Dark Blue", value: "darkBlue" },
          { title: "Brown (solid)", value: "brownSolid" },
          { title: "Tan (solid)", value: "tan" },
          { title: "Dark Blue (solid)", value: "darkBlueSolid" },
          { title: "Light Blue (solid)", value: "lightBlueSolid" },
        ],
      },
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "tagline",
      title: "Hero Copy",
      type: "pagePortableText",
    },
    {
      name: "illustration",
      type: "mainImage",
      title: "Image",
    },
    {
      name: "cta",
      type: "cta",
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
      title: "heading",
      subtitle: "label",
      disabled: "disabled",
    },
    prepare({ title, disabled }) {
      return {
        title: `Hero: ${disabled ? "DISABLED" : title}`,
      };
    },
  },
};
