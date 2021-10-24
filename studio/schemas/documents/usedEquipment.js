// import PriceInput from "../../helpers/PriceInput";

export default {
  name: "used",
  type: "document",
  title: "Used Equipment",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tagline",
      title: "Description",
      type: "pagePortableText",
    },
    // {
    //   name: "price",
    //   title: "Price",
    //   type: "number",
    //   description:
    //     "Price in cents. If no price is given, it will say 'Call for pricing'",
    //   inputComponent: PriceInput,
    // },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "mainImage",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0.asset",
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      };
    },
  },
};
