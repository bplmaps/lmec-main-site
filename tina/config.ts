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
  branch: "main",
  clientId: "59f3cc7d-d3f5-485d-a411-930f49584cf8", // Get this from tina.io
  token: "0dbf580bb30e15a5a25e56cc74f396d46ce3c4b3", // Get this from tina.io
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
        label: "⚙️ Homepage Configuration",
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
          ...homepage_configFields(),
        ],
      },
      {
        format: "yml",
        label: "⏰ Hours",
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
                      return { label: item?.date };
              },
            },
            fields: [
              {
                label: "Date",
                name: "date",
                type: "datetime",
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
        ],
      },
      {
        format: "md",
        label: "📝 Articles",
        name: "articles",
        path: "content/articles",
        match: {
          include: "**/*",
        },
        fields: [
          ...article_postFields(),
        ]
      },
      {
        format: "md",
        label: "📰 Newsletters",
        name: "newsletters",
        path: "content/newsletters",
        match: {
          include: "**/*",
        },
        fields: [
          ...newsletterFields(),
        ],
      },
      {
        format: "md",
        label: "📆 Events",
        name: "event",
        path: "content/event",
        match: {
          include: "**/*",
        },
        fields: [
          ...event_listingFields(),
        ],
      },
      {
        format: "md",
        label: "📚 Education",
        name: "education",
        path: "content/education",
        match: {
          include: "**/*",
        },
        fields: [
          ...standard_pageFields(),
        ],
      },
      {
        format: "md",
        label: "🔎 Research",
        name: "research",
        path: "content/research",
        match: {
          include: "**/*",
        },
        fields: [
          ...standard_pageFields(),
        ],
      },
      {
        format: "md",
        label: "🖼️ Exhibitions",
        name: "exhibitions",
        path: "content/exhibitions",
        match: {
          include: "**/*",
        },
        fields: [
          ...standard_pageFields(),
        ],
      },
      {
        format: "md",
        label: "🗄️ Projects",
        name: "projects",
        path: "content/projects",
        match: {
          include: "**/*",
        },
        fields: [
          ...digital_projectFields(),
        ],
      },
      {
        format: "md",
        label: "🗺️ Collections",
        name: "libraryCollections",
        path: "content/collections",
        match: {
          include: "**/*",
        },
        fields: [
          ...standard_pageFields(),
        ],
      },
      {
        format: "md",
        label: "❓About",
        name: "about",
        path: "content/about",
        match: {
          exclude: 'people/*',
        },
        fields: [
          ...standard_pageFields(),
        ],
      },
      {
        format: "md",
        label: "😎 People",
        name: "people",
        path: "content/about/people",
        match: {
          include: '*',
        },
        fields: [
          ...person_entryFields(),
        ],
      },
      {
        format: "md",
        label: "🛍️ Store",
        name: "store",
        path: "content/store",
        match: {
          include: "**/*",
        },
        fields: [
          ...store_productFields(),
        ],
      },
      {
        format: "md",
        label: "💵 Donate",
        name: "donate",
        path: "content/donate",
        match: {
          include: "**/*",
        },
        fields: [
          ...standard_pageFields(),
        ],
      },
      {
        format: "md",
        label: "📌 Misc Pages",
        name: "top_level_pages",
        path: "content",
        match: {
          include: "*",
        },
        fields: [
          ...standard_pageFields(),
        ],
      },
    ],
  },
});
