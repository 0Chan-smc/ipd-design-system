import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'IPD Design System',
  tagline:
    'The SMC Group 내부 서비스를 일관성을 가지고 구축하기 위한 디자인을 정의합니다.',
  favicon: 'img/favicon.ico',

  url: 'https://0Chan-smc.github.io',
  baseUrl: '/ipd-design-system/',

  organizationName: '0Chan-smc',
  projectName: 'ipd-design-system',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko-KR',
    locales: ['ko-KR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/0Chan-smc/ipd-design-system/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          // showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/0Chan-smc/ipd-design-system/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Design system',
      logo: {
        alt: 'SMC Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guidelinesSidebar',
          position: 'left',
          label: '가이드라인',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'componentsSidebar',
        //   position: 'left',
        //   label: '컴포넌트',
        // },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://main--6620de02a5e20036aa48cf04.chromatic.com',
          label: 'Storybook',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '문서',
          items: [
            {
              label: '가이드라인',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '연관 프로젝트',
          items: [
            {
              label: 'PMS',
              href: 'https://pms.smcpage.com/',
            },
            {
              label: 'ERP',
              href: 'https://erp.smcpage.com/',
            },
          ],
        },
        {
          title: '디자인 시스템',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/0Chan-smc/ipd-design-system',
            },
            {
              label: 'Storybook',
              href: 'https://main--6620de02a5e20036aa48cf04.chromatic.com',
            },
            {
              label: 'Chromatic',
              href: 'https://www.chromatic.com/library?appId=6620de02a5e20036aa48cf04&branch=main',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The SMC Group | Team IPD`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
