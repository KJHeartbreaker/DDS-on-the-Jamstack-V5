import { GrGrid as icon } from "react-icons/gr";

export default {
  name: "equipmentGrid",
  type: "document",
  title: "Equipment Grid",
  icon,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "content",
      type: "array",
      title: "Used Equipment for Sale",
      of: [{ type: "equipmentReference" }],
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
      content0: "content.0.equipment.title",
      content1: "content.1.equipment.title",
      content2: "content.2.equipment.title",
      content3: "content.3.equipment.title",
    },
    prepare({ title, ...content }) {
      const subs = Object.values(content).filter(Boolean);
      const subtitles = subs.length > 0 ? `${subs.join(", ")}` : "";

      return {
        title: title ? `${title}` : `Used Equipment for Sale`,
        subtitle: `${subtitles}`,
      };
    },
  },
};
