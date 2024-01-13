import type { TinaField } from "tinacms";
export function hours_configFields() {
  return [
    {
      name: "specialNote",
      label: "Special Hours Note",
      type: "string"
    },
    {
      name: "weekly",
      label: "Weekly Schedule",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          // Field values are accessed by title?.<Field name>
                return { label: item?.day };
        },
      },
      fields: [
        {
          label: "Day",
          name: "day",
          type: "string",
        },
        {
          label: "Open Time",
          name: "open",
          type: "string",
        },
        {
          label: "Close Time",
          name: "close",
          type: "string",
        },
        {
          label: "Special Note",
          name: "special",
          type: "string",
        },
      ],
    },
    {
      name: "exceptions",
      label: "Schedule Exceptions",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          // Field values are accessed by title?.<Field name>
                return { label: item?.name + " - " + item?.date};
        },
      },
      fields: [
        {
          label: "Date",
          name: "date",
          type: "string", 
        },
        {
          label: "Holiday Name",
          name: "name",
          type: "string",
        },
        {
          label: "Special Note",
          name: "special",
          type: "string",
        },
      ],
    }
  ] as TinaField[];
}
export function article_postFields() {
  return [
    {
      type: "boolean",
      name: "draft",
      label: "Draft Status",
      toggleLabels: {
        true: 'On',
        false: 'Off',
      },
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
      isTitle: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Publish Date",
      required: true,
      ui: {
        timeFormat: "HH:mm"
      },
    },
    {
      type: "string",
      name: "author",
      label: "Author",
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
      description: "This is the image that shows in the list view of articles. (If using a IIIF image URL, make sure to limit the width to 1200px.) Image cropper: https://geoservices.leventhalmap.org/iiif-tools/",
    },
    {
      type: "string",
      name: "backgroundImage",
      label: "Background Image",
      required: true,
      description: "This is the image that shows on the article page at the top. (If using a IIIF image, make sure to limit the width to 1200px.) Image cropper: https://geoservices.leventhalmap.org/iiif-tools/",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      description: "To see other article tags, visit: https://www.leventhalmap.org/tags/",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "rich-text",
      name: "body",
      label: "Article Text",
      isBody: true,
      templates: [
        {
          name: 'figure',
          label: 'Single Image',
          match: {
            start: '{{<',
            end: '>}}',
          },
          fields: [
            {
              name: 'src',
              label: 'Image URL',
              type: 'string',
              required: true,
            },
            {
              name: 'caption',
              label: 'Caption',
              type: 'string',
            },
            {
              name: 'class',
              label: 'Image Orientation',
              type: 'string',
              options: [
                { label: "Figure Left", value: "figure-left" },
                { label: "Figure Right", value: "figure-right" },
                { label: "Full Width", value: "" },
              ],
              ui: {
                defaultValue: "",
              }
            },
          ],
        }
      ]
    }
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
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
    },
  ] as TinaField[];
}
export function event_listingFields() {
  return [
    {
      type: "boolean",
      name: "draft",
      label: "Draft Status",
      toggleLabels: {
        true: 'On',
        false: 'Off',
      },
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Event Date & Time",
      required: true,
      ui: {
        timeFormat: 'HH:mm'
      }
    },
    {
      type: "datetime",
      name: "publishDate",
      label: "Publish Date",
      required: true,
      ui: {
        timeFormat: "HH:mm"
      },
    },
    {
      type: "string",
      name: "image",
      label: "Image",
    },
    {
      type: "string",
      name: "backgroundImage",
      label: "Background image",
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
    {
      type: "rich-text",
      name: "body",
      label: "Event Description",
      isBody: true,
      templates: [
        {
          name: 'figure',
          label: 'Single Image',
          match: {
            start: '{{<',
            end: '>}}',
          },
          fields: [
            {
              name: 'src',
              label: 'Image URL',
              type: 'string',
              required: true,
            },
            {
              name: 'caption',
              label: 'Caption',
              type: 'string',
            },
            {
              name: 'class',
              label: 'Image Orientation',
              type: 'string',
              options: [
                { label: "Figure Left", value: "figure-left" },
                { label: "Figure Right", value: "figure-right" },
                { label: "Full Width", value: "" },
              ],
              ui: {
                defaultValue: "",
              }
            },
          ],
        }
      ]
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
        toggleLabels: {
          true: 'Yes',
          false: 'No',
        },
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
        ui: {
          itemProps: (item) => {
            // Field values are accessed by title?.<Field name>
              return { label: item?.title };
            },
        }, 
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
            label: "Button Options",
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
        toggleLabels: {
          true: 'Yes',
          false: 'No',
        },
      },
      {
        type: "object",
        name: "announcements",
        label: "announcements",
        list: true,
        ui: {
          itemProps: (item) => {
            // Field values are accessed by title?.<Field name>
            return { label:  item?.badge + " | " + item?.text };
          },
        }, 
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
        toggleLabels: {
          true: 'Yes',
          false: 'No',
        },
      },
      {
        type: "object",
        name: "audienceGroups",
        label: "audienceGroups",
        list: true,
        ui: {
          itemProps: (item) => {
              return { label: item?.name };
          },
        },
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
    label: "Frontpage Feature",
    fields: [
      {
        type: "boolean",
        name: "enable",
        label: "enable",
        toggleLabels: {
          true: 'Yes',
          false: 'No',
        },
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
        label: "Button Customization",
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
    label: "Event Listings",
    fields: [
      {
        type: "boolean",
        name: "enable",
        label: "enable",
        toggleLabels: {
          true: 'Yes',
          false: 'No',
        },
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
    label: "Fun Facts",
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
        ui: {
          itemProps: (item) => {
              return { label: item?.name };
          },
        },
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
    label: "Blog Feature",
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
    toggleLabels: {
      true: 'Yes',
      false: 'No',
    },
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
        toggleLabels: {
          true: 'On',
          false: 'Off',
        },
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
        ui: {
          timeFormat: "HH:mm"
        },
      },
      {
        type: "datetime",
        name: "endTime",
        label: "endTime",
        ui: {
          timeFormat: "HH:mm"
        },
      },
    ],
  }
] as TinaField[];
}
export function newsletterFields() {
  return [
    {
      type: "boolean",
      name: "draft",
      label: "Draft Status",
      toggleLabels: {
        true: 'On',
        false: 'Off',
      },
    },
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
      type: "rich-text",
      name: "banner_image_caption",
      label: "Banner caption",
    },
    {
      type: "rich-text",
      name: "introductory_text",
      label: "Introductory Text",
    },
    {
      type: "object",
      name: "content_block",
      label: "Content Block",
      list: true,
      ui: {
        itemProps: (item) => {
            return { label: item?.content_block_header };
        },
      },
      fields: [
        {
          type: "string",
          name: "content_block_header",
          label: "Content Block Header",
        },
        {
          type: "rich-text",
          name: "content_block_text",
          label: "Content Block Text",
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
      type: "boolean",
      name: "draft",
      label: "Draft Status",
      required: true,
      toggleLabels: {
        true: 'Draft Mode',
        false: 'Published',
      },
    },
    {
      type: "string",
      name: "title",
      label: "Person Name",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Position",
      required: true,
    },
    {
      type: "string",
      name: "headshot",
      label: "Headshot URL",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Short Bio",
      description: "This is the where you put the person's bio.",
      isBody: true,
    },
    {
      type: "string",
      name: "type",
      label: "File Type",
      options: ["person"],
      required: true,
      
    },
    {
      type: "string",
      name: "staff_category",
      label: "Staff Category",
      options: ["staff", "fellow", "intern"],
      required: true,
    },
    {
      type: "object",
      name: "contact",
      label: "Contact Methods",
      list: true,
      ui: {
        itemProps: (item) => {
          // Field values are accessed by title?.<Field name>
                return { label: item?.method };
        },
      },
      fields: [
        {
          type: "string",
          name: "method",
          label: "Contact Method",
        },
        {
          type: "string",
          name: "details",
          label: "Contact Details",
        },
      ],
    },
    {
      type: "boolean",
      name: "menu",
      label: "Appears in Sidebar Menu",
      required: true,
      toggleLabels: {
        true: 'In Menu',
        false: 'Not in Menu',
      },
    },
  ] as TinaField[];
}
export function standard_pageFields() {
  return [
    {
      type: "boolean",
      name: "draft",
      label: "Draft Status",
      toggleLabels: {
        true: 'On',
        false: 'Off',
      },
    },
    {
      type: "string",
      name: "title",
      label: "title",
      isTitle: true,
      required: true,
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
    {
      type: "rich-text",
      name: "body",
      label: "Article Text",
      isBody: true,
      templates: [
        {
          name: 'figure',
          label: 'Single Image',
          match: {
            start: '{{<',
            end: '>}}',
          },
          fields: [
            {
              name: 'src',
              label: 'Image URL',
              type: 'string',
              required: true,
            },
            {
              name: 'caption',
              label: 'Caption',
              type: 'string',
            },
            {
              name: 'class',
              label: 'Image Orientation',
              type: 'string',
              options: [
                { label: "Figure Left", value: "figure-left" },
                { label: "Figure Right", value: "figure-right" },
                { label: "Full Width", value: "" },
              ],
              ui: {
                defaultValue: "",
              }
            },
          ],
        },
      ]
    }
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
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
    },
  ] as TinaField[];
}

