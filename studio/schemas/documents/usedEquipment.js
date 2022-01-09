import PriceInput from "../../helpers/PriceInput";

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
      title: "Is this equipment surplus?",
      name: "surplus",
      type: "boolean",
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
    {
      name: "price",
      title: "Price",
      type: "number",
      description:
        "Price in cents. If no price is given, it will say 'Call for pricing'",
      inputComponent: PriceInput,
    },
    {
      name: "itemNumber",
      title: "Item Number",
      type: "string",
    },
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
  initialValue: {
    surplus: false,
  },
  orderings: [
    {
      title: "Sort by Item Number Ascending",
      name: "itemAsc",
      by: [{ field: "itemNumber", direction: "asc" }],
    },
    {
      title: "Sort by Item Number Descending",
      name: "itemDesc",
      by: [{ field: "itemNumber", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "itemNumber",
      surplus: "surplus",
      media: "images.0.asset",
    },
    prepare({ title, subtitle, surplus, media }) {
      let sub;

      if (subtitle && surplus === true) {
        sub = `surplus | Item ${subtitle}`;
      } else {
        sub = `Item ${subtitle}`;
      }
      return {
        title,
        subtitle: subtitle ? sub : "",
        media,
      };
    },
  },
};
