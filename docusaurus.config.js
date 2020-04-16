module.exports = {
  title: 'React Go',
  tagline: '快速启动你的 React 项目',
  url: 'https://react-go.github.io',
  baseUrl: '/',
  favicon: 'favicon.png',
  organizationName: 'react-go', // Usually your GitHub org/user name.
  projectName: 'react-go.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'React Go',
      logo: {
        alt: 'React Go Logo',
        src: 'statics/logo.png',
      },
      links: [
        {
          to: 'docs/getting-started',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left',
        },
        {
          href: 'https://github.com/react-go',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '快速上手',
              to: 'docs/getting-started',
            },
            {
              label: '配置参考',
              to: 'docs/configuration',
            },
          ],
        },
        {
          title: '链接',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/react-go',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React Go. Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: 'UA-74390371-4'
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/react-go/react-go.github.io/edit/website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
