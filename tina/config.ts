import { defineConfig } from "tinacms";
import { article_postFields } from "./templates";
import { digital_projectFields } from "./templates";
import { event_listingFields } from "./templates";
import { homepage_configFields } from "./templates";
import { newsletterFields } from "./templates";
import { person_entryFields } from "./templates";
import { standard_pageFields } from "./templates";
import { store_productFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "097f9d05-d307-4978-823b-d332ea55d27e", // Get this from tina.io
  token: "068cb6cc2bb66b3068fb66f2b66b027ee372f61a", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "yml",
        label: "Homepage Configuration",
        name: "homepage_configuration",
        path: "data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "homepage",
        },
        fields: [
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
        ],
      },
      {
        format: "yml",
        label: "Hours",
        name: "hours",
        path: "data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "hours",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "md",
        label: "Articles",
        name: "articles",
        path: "content/articles",
        match: {
          include: "**/*",
        },
        fields: [
          ...article_postFields(),
          {
            type: "rich-text",
            name: "body",
            label: "Article Text",
            isBody: true,
          }
        ]
      },
      {
        format: "md",
        label: "Newsletters",
        name: "newsletters",
        path: "content/newsletters",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...newsletterFields(),
        ],
      },
      {
        format: "md",
        label: "Events",
        name: "event",
        path: "content/event",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...event_listingFields(),
        ],
      },
      {
        format: "md",
        label: "Education",
        name: "education",
        path: "content/education",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...standard_pageFields(),
        ],
      },
      {
        format: "md",
        label: "Research",
        name: "research",
        path: "content/research",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Exhibitions",
        name: "exhibitions",
        path: "content/exhibitions",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Projects",
        name: "projects",
        path: "content/projects",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...digital_projectFields(),
        ],
      },
      {
        format: "md",
        label: "Collections",
        name: "libraryCollections",
        path: "content/collections",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...standard_pageFields(),
        ],
      },
      {
        format: "md",
        label: "About",
        name: "about",
        path: "content/about",
        match: {
          include: '*',
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...person_entryFields(),
        ],
      },
      {
        format: "md",
        label: "Store",
        name: "store",
        path: "content/store",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...store_productFields(),
        ],
      },
      {
        format: "md",
        label: "Donate",
        name: "donate",
        path: "content/donate",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Other Top Level Pages",
        name: "top_level_pages",
        path: "content",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
