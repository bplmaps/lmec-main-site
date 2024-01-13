import { defineConfig } from "tinacms";
import { article_postFields } from "./templates";
import { hours_configFields } from "./templates";
import { digital_projectFields } from "./templates";
import { event_listingFields } from "./templates";
import { homepage_configFields } from "./templates";
import { newsletterFields } from "./templates";
import { person_entryFields } from "./templates";
import { standard_pageFields } from "./templates";
import { store_productFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || "main";

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
          ...hours_configFields(),
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
        ],
        defaultItem: () => {
          return {
            draft: true,
          }
        },
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
        defaultItem: () => {
          return {
            draft: true,
          }
        },
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
        defaultItem: () => {
          return {
            draft: true,
          }
        },
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
