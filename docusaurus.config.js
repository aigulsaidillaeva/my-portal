// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Документация",
  tagline: "Документация МОН КР",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://bilim.gov.kg",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ГУ ЦЦО", // Usually your GitHub org/user name.
  projectName: "Документация", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Портал инструкций",
        // logo: {
        //   alt: "My Site Logo",
        //   src: "",
        // },
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
          {
            type: "localeDropdown",
            position: "right", // Размещаем в верхнем правом углу
          },
          { to: "/blog", label: "Блог", position: "left" },
          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Министерство образования и науки КР",
          },
          {
            title: "Домашняя страница",
          },
          {
            title:
              "Разработано государственным учреждением «Центр цифрового образования» при Министерстве образования КР © Все права защищены",
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
