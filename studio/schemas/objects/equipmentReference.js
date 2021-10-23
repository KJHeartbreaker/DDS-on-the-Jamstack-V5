export default {
  name: "equipmentReference",
  type: "object",
  title: "Equipment Reference",
  fields: [
    {
      name: "equipment",
      type: "reference",
      title: "Equipment",
      description: "Which Equipment are we referencing?",
      to: [{ type: "used" }],
    },
  ],
  preview: {
    select: {
      title: "equipment.title",
      media: "equipment.images.0.asset",
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      };
    },
  },
};
