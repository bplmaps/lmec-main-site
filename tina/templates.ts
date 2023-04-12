import type { TinaField } from "tinacms";
export function article_postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "image",
      label: "Card Image",
      required: true,
    },
    {
      type: "string",
      name: "author",
      label: "Author",
      required: true,
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "backgroundImage",
      label: "Background Image",
    },
  ] as TinaField[];
}
export function digital_projectFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "image",
      name: "backgroundImage",
      label: "backgroundImage",
    },
    {
      type: "image",
      name: "cardImage",
      label: "cardImage",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "resourceUrl",
      label: "resourceUrl",
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true,
    },
    {
      type: "string",
      name: "type",
      label: "type",
    },
    {
      type: "number",
      name: "weight",
      label: "weight",
    },
  ] as TinaField[];
}
export function event_listingFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
      required: true,
    },
    {
      type: "datetime",
      name: "publishDate",
      label: "publishDate",
      required: true,
    },
    {
      type: "string",
      name: "image",
      label: "Image",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "backgroundImage",
      label: "Background image",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "location",
      label: "Location",
    },
    {
      type: "string",
      name: "fee",
      label: "Fee",
    },
    {
      type: "string",
      name: "registration",
      label: "Registration URL",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
  ] as TinaField[];
}
export function homepage_configFields() {
  return [
    {
      type: "object",
      name: "slider",
      label: "Top Hero Slider",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "Enable Hero Slider?",
        },
        {
          type: "image",
          name: "bg_images",
          label: "Background Images",
          list: true,
        },
        {
          type: "object",
          name: "slider_item",
          label: "Slider Headline Text",
          list: true,
          fields: [
            {
              type: "string",
              name: "title",
              label: "Headline",
            },
            {
              type: "string",
              name: "content",
              label: "content",
              ui: {
                component: "textarea",
              },
            },
            {
              type: "string",
              name: "animation_in",
              label: "animation_in",
            },
            {
              type: "string",
              name: "animation_out",
              label: "animation_out",
            },
            {
              type: "object",
              name: "button",
              label: "button",
              fields: [
                {
                  type: "boolean",
                  name: "enable",
                  label: "enable",
                },
                {
                  type: "string",
                  name: "label",
                  label: "label",
                },
                {
                  type: "string",
                  name: "link",
                  label: "link",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "cta",
      label: "What's New Section",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "object",
          name: "announcements",
          label: "announcements",
          list: true,
          fields: [
            {
              type: "string",
              name: "badge",
              label: "badge",
            },
            {
              type: "string",
              name: "text",
              label: "text",
            },
            {
              type: "string",
              name: "link",
              label: "link",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "audiences",
      label: "Audience Callouts",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "object",
          name: "audienceGroups",
          label: "audienceGroups",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "name",
            },
            {
              type: "string",
              name: "description",
              label: "description",
            },
            {
              type: "string",
              name: "color",
              label: "color",
            },
            {
              type: "object",
              name: "links",
              label: "links",
              list: true,
              fields: [
                {
                  type: "string",
                  name: "title",
                  label: "title",
                },
                {
                  type: "string",
                  name: "link",
                  label: "link",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "frontpageFeature",
      label: "frontpageFeature",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "image",
          name: "bg_image",
          label: "bg_image",
        },
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "content",
          label: "content",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "object",
          name: "button",
          label: "button",
          fields: [
            {
              type: "boolean",
              name: "enable",
              label: "enable",
            },
            {
              type: "string",
              name: "label",
              label: "label",
            },
            {
              type: "string",
              name: "link",
              label: "link",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "event",
      label: "event",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "string",
          name: "title",
          label: "title",
        },
      ],
    },
    {
      type: "object",
      name: "funfacts",
      label: "funfacts",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "object",
          name: "funfact_item",
          label: "funfact_item",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "name",
            },
            {
              type: "string",
              name: "count",
              label: "count",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "blog",
      label: "blog",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "string",
          name: "title",
          label: "title",
        },
      ],
    },
    {
      type: "boolean",
      name: "todaysHours",
      label: "Show Today's Hours",
    },
    {
      type: "object",
      name: "upcomingLivestream",
      label: "upcomingLivestream",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "string",
          name: "embedLink",
          label: "embedLink",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "datetime",
          name: "startTime",
          label: "startTime",
        },
        {
          type: "datetime",
          name: "endTime",
          label: "endTime",
        },
      ],
    },
  ] as TinaField[];
}
export function newsletterFields() {
  return [
    {
      type: "datetime",
      name: "newsletter_publication_date",
      label: "Newsletter publication Date",
      required: true,
    },
    {
      type: "string",
      name: "subject_line",
      label: "Email Subject Line",
    },
    {
      type: "string",
      name: "banner_iiif_image",
      label: "Banner IIIF image",
      required: true,
    },
    {
      type: "string",
      name: "banner_image_caption",
      label: "Banner caption",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "introductory_text",
      label: "Introductory Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "content_block",
      label: "Content Block",
      list: true,
      fields: [
        {
          type: "string",
          name: "content_block_header",
          label: "Content Block Header",
        },
        {
          type: "string",
          name: "content_block_text",
          label: "Content Block Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "content_block_button_url",
          label: "Content Block Button URL",
        },
        {
          type: "string",
          name: "content_block_button_text",
          label: "Content Block Button Text",
        },
        {
          type: "string",
          name: "content_block_image",
          label: "Content Block Image URL",
        },
        {
          type: "string",
          name: "content_block_image_alt_text",
          label: "Content Block Image Alt Text",
        },
      ],
    },
  ] as TinaField[];
}
export function person_entryFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "image",
      name: "headshot",
      label: "headshot",
    },
    {
      type: "string",
      name: "type",
      label: "type",
    },
    {
      type: "string",
      name: "staff_category",
      label: "Staff Category",
      options: ["staff", "fellow"],
    },
    {
      type: "object",
      name: "contact",
      label: "contact",
      list: true,
      fields: [
        {
          type: "string",
          name: "method",
          label: "method",
        },
        {
          type: "string",
          name: "details",
          label: "details",
        },
      ],
    },
  ] as TinaField[];
}
export function standard_pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "image",
      name: "backgroundImage",
      label: "backgroundImage",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "weight",
      label: "weight",
    },
  ] as TinaField[];
}
export function store_productFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "image",
      name: "product_image",
      label: "Product Image",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "number",
      name: "weight",
      label: "weight",
    },
    {
      type: "object",
      name: "store",
      label: "Product Details",
      fields: [
        {
          type: "string",
          name: "item_id",
          label: "Item ID",
        },
        {
          type: "string",
          name: "item_price",
          label: "Base Price",
        },
        {
          type: "string",
          name: "item_text_price",
          label: "Price description",
        },
      ],
    },
  ] as TinaField[];
}
