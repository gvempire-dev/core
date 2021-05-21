/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: 'GVEMPIRE',
  tagline: 'Good Vibes and Greater Ventures',
  url: 'https://gvempire.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'icons/favicon.ico',
  organizationName: 'gvempire-dev', // Usually your GitHub org/user name.
  projectName: 'GVEMPIRE', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'GVEMPIRE',
      style: 'dark',
      logo: {
        alt: 'GVEMPIRE Logo',
        src: 'logos/logo__dark.png',
      },
      items: [
        {
          label: 'Business',
          position: 'right',
          items: [
            { to: '/about-gv', label: 'About' },
            { to: '/services', label: 'Services' },
            { to: '/resume', label: 'Resume' },
            { to: '/docs', label: 'Case Studies' },
          ],
        },
        {
          label: 'Personal',
          position: 'right',
          items: [
            { to: '/about-kj', label: 'About' },
            { to: '/timeline', label: 'Timeline' },
            { to: '/gallery', label: 'Gallery' },
            { to: '/blog', label: 'Blog' },
          ],
        },
      ],
    },

    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} GVEMPIRE, LLC`,
      links: [
        {
          title: 'Social Media',
          items: [
            {
              label: 'Youtube',
              href: 'https://youtube.com/channel/gvempire',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/tkjohnson121',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/gvempire',
            },
            {
              label: 'Twitch',
              href: 'https://discord.com/gvempire',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Contact',
              to: '/contact',
            },
            {
              label: 'GitLab',
              href: 'https://gitlab.com/gvempire',
            },
          ],
        },
      ],
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://gitlab.com/gvempire/www/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://gitlab.com/gvempire/www/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
