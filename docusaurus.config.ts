import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Jifunze Sasa',
  tagline: 'Learning platform for everyone',
  favicon: 'img/favicon.ico',
  url: 'https://jifunzesasa.github.io/',
  baseUrl: '/',
  organizationName: 'jifunzesasa',
  projectName: 'jifunzesasa.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',          
          editUrl:
            'https://github.com/jifunzesasa/jifunzesasa.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,          
          editUrl:
            'https://github.com/jifunzesasa/jifunzesasa.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {    
    image: 'img/social.png',
    navbar: {
      title: '=/ Jifunze Sasa',
      logo: {
        alt: 'Jifunze Sasa Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorials',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/jifunzesasa/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Guides',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/alphaolomi',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'Our Story',
              to: '/about',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jifunze Sasa.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
