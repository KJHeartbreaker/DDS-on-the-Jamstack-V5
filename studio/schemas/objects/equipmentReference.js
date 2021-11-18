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
      subtitle: "equipment.itemNumber",
      media: "equipment.images.0.asset",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle,
        media,
      };
    },
  },
};
