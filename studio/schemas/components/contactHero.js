import { FcFlashOn as icon } from "react-icons/fc";

export default {
  type: "object",
  name: "contactHero",
  title: "Contact Hero",
  icon,
  fields: [
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
      name: "contactForm",
      type: "contactForm",
      title: "Contact Form",
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
      disabled: "disabled",
    },
    prepare({ title, disabled }) {
      return {
        title: `Hero: ${disabled ? "DISABLED" : title}`,
      };
    },
  },
};
