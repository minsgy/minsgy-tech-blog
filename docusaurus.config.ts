import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Minsgy's log",
  tagline: "주니어 프론트엔드 개발자로서 공부하고 경험한 내용을 기록합니다.",
  url: "https://minsgy.github.io",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "minsgy", // Usually your GitHub org/user name.
  projectName: "minsgy.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/minsgy/minsgy.github.io/edit/main/",
        },
        blog: {
          id: "blog",
          blogSidebarCount: "ALL",
          blogSidebarTitle: "기술 아티클 목록",
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/minsgy/minsgy.github.io/edit/main/",
          path: "blog",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "MINSGY.LOG",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        { to: "/blog", label: "기록장", position: "left" },
        { to: "/about", label: "소개", position: "left" },
        {
          href: "https://github.com/minsgy",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "More",
          items: [
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/in/minsgy",
            },
            {
              label: "GitHub",
              href: "https://github.com/minsgy",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Minsgy.log, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
