// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Документация",
  tagline: "Документация МОН КР",
  favicon: "img/logo.svg",

  url: "https://bilim.gov.kg",
  baseUrl: "/doc",

  organizationName: "ГУ ЦЦО",
  projectName: "Документация",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "ky"],
    localeConfigs: {
      ru: { label: "Русский", direction: "ltr" },
      ky: { label: "Кыргызча", direction: "ltr" },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // editUrl: "https://github.com/aigulsaidillaeva/my-portal/edit/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    [
      "@cmfcmf/docusaurus-search-local",
      {
        language: ["ru"],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Портал инструкций",
        logo: {
    alt: "Логотип МОН КР",
    src: "img/logo.svg", // путь к файлу в папке static
  },
        items: [
          {
            type: "docSidebar",
            sidebarId: "kindergartenSidebar",
            position: "left",
            label: "Садик",
          },
          {
            type: "docSidebar",
            sidebarId: "schoolSidebar",
            position: "left",
            label: "Школа",
          },
          {
            type: "docSidebar",
            sidebarId: "vuzSidebar",
            position: "left",
            label: "ВУЗ",
          },
          {
            type: "docSidebar",
            sidebarId: "otherSidebar",
            position: "left",
            label: "Другие",
          },
          // { to: "/blog", label: "Блог", position: "left" },
          { type: "localeDropdown", position: "right" },
          { type: "search", position: "right" },
        ],
      },

      footer: {
        style: "dark",
        links: [
          {
            title: "Министерство образования и науки КР",
            items: [],
          },
          {
            title: "Домашняя страница",
            items: [],
          },
         
          {
            title:
              "Разработано государственным учреждением «Центр цифрового образования» при Министерстве образования КР © Все права защищены",
            items: [],
          },
        ],
        copyright: `«Центр цифрового образования» при Министерстве образования КР ${new Date().getFullYear()} .`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
