import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'IPD Design System',
  tagline: '내부 서비스를 일관성 있게 구축하기 위한 디자인을 정의합니다.',
  favicon: 'img/favicon.ico',

  url: 'https://0Chan-smc.github.io',
  baseUrl: '/ipd-design-system/',

  // organizationName은 Repo 소유자 이름을 적어야 함.
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
        },
        blog: {
          // showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
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
          label: '원칙',
        },
        { to: '/components', label: '컴포넌트', position: 'left' },
        { to: '/blog', label: 'UI 가이드라인', position: 'left' },
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
              label: 'Foundation',
              to: '/docs/color',
            },
            {
              label: 'Components',
              to: '/components',
            },
            {
              label: 'UI Guidelines',
              to: '/blog',
            },
          ],
        },
        {
          title: '참고 자료',
          items: [
            {
              label: 'SMC 비주얼 가이드라인',
              href: 'https://hub.smcpage.com/the-smc-%eb%b8%8c%eb%9e%9c%eb%93%9c-%eb%b9%84%ec%a3%bc%ec%96%bc-%ea%b0%80%ec%9d%b4%eb%93%9c%eb%9d%bc%ec%9d%b8/',
            },
            {
              label: '쏘카 디자인 시스템',
              href: 'https://socarframe.socar.kr/8bb3aba4a/p/5857a5-socar-frame',
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
