export default {
  type: "object",
  name: "pagePortableText",
  title: "Portable Text Block",
  fields: [
    {
      name: "portableTextBlock",
      type: "array",
      of: [
        {
          type: "block",
          title: "Block",
          // Styles let you set what your user can mark up blocks with. These
          // corrensponds with HTML tags, but you can set any title or value
          // you want and decide how you want to deal with it where you want to
          // use your content.
          styles: [
            { title: "Paragraph", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Number", value: "number" },
          ],
          // Marks let you mark up inline text in the block editor.
          marks: {
            // Decorators usually describe a single property – e.g. a typographic
            // preference or highlighting by editors.
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            // Annotations can be any object structure – e.g. a link or a footnote.
            annotations: [
              {
                name: "link",
                type: "object",
                title: "URL",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                  {
                    title: "Open in new window",
                    name: "blank",
                    type: "boolean",
                  },
                ],
              },
              {
                name: "internalLink",
                type: "object",
                title: "Internal Link",
                fields: [
                  {
                    name: "item",
                    type: "reference",
                    to: [{ type: "page" }],
                  },
                ],
              },
            ],
          },
        },
        {
          title: "CTA",
          name: "cta",
          type: "cta",
        },
        {
          type: "mainImage",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "disabled",
      title: "Disabled",
      description:
        "Setting this to true will disable the component, but not delete it.",
      type: "boolean",
    },
  ],
};
