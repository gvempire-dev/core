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
      logo: {
        alt: 'GVEMPIRE Logo',
        src: 'logos/logo__dark.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'home',
          position: 'left',
          label: 'Home',
        },
        {
          type: 'doc',
          docId: 'about',
          position: 'left',
          label: 'About',
        },
        {
          type: 'doc',
          docId: 'services',
          position: 'left',
          label: 'Services',
        },
        { to: '/case-studies', label: 'Case Studies', position: 'right' },
        { to: '/gallery', label: 'Gallery', position: 'right' },
        { to: '/blog', label: 'Blog', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Follow Me!',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
