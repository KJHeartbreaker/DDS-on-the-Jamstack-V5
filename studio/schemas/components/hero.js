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
    // {
    //   title: "Background Colour",
    //   description:
    //     "Pick a colour. The second colour of a type has no gradient.",
    //   name: "colorlist",
    //   type: "colorlist", // required
    //   options: {
    //     borderradius: {
    //       outer: "100%",
    //       inner: "100%",
    //     },
    //     list: [
    //       { title: "Brown", value: "#2e1b0c", light: "#e3c4a8" },
    //       { title: "SolidBrown", value: "#2e1b0c", light: "#2e1b0c" },
    //       { title: "SolidTan", value: "#e3c4a8", light: "#e3c4a8" },
    //       { title: "DarkBlue", value: "#3d547a", light: "#7c8cc4" },
    //       { title: "SolidLightBlue", value: "#b4d4ec", light: "#b4d4ec" },
    //     ],
    //   },
    // },
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
