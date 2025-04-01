// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '葫芦学堂',
  tagline: '知识的殿堂，智慧的源泉',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://first-docu-site.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mafye', // Usually your GitHub org/user name.
  projectName: 'firstDocuSite', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
    localeConfigs: {
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mafye/firstDocuSite/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mafye/firstDocuSite/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '葫芦学堂',
        logo: {
          alt: '葫芦学堂 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '课程文档',
          },
          {to: '/blog', label: '学习博客', position: 'left'},
          {to: '/about', label: '关于我们', position: 'left'},
          {to: '/contact', label: '联系我们', position: 'left'},
          {
            href: 'https://github.com/mafye/firstDocuSite',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '学习资源',
            items: [
              {
                label: '课程介绍',
                to: '/docs/intro',
              },
              {
                label: '入门指南',
                to: '/docs/category/getting-started',
              },
              {
                label: '常见问题',
                to: '/docs/faq',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: '学习论坛',
                href: 'https://example.com/forum',
              },
              {
                label: '微信公众号',
                href: 'https://example.com/wechat',
              },
              {
                label: '知乎专栏',
                href: 'https://zhihu.com',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '学习博客',
                to: '/blog',
              },
              {
                label: '关于我们',
                to: '/about',
              },
              {
                label: '加入我们',
                to: '/join',
              },
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} 葫芦学堂. 基于 Docusaurus 构建.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
