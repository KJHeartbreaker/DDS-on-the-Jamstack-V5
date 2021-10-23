export default {
  title: "Contact Form",
  name: "contactForm",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: `Form: ${title}`,
      };
    },
  },
};
