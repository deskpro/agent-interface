// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

const siteConfig = {
  title: 'Agent Style',
  tagline: 'Styles for Deskpro Agent Interface',
  url: 'https://deskpro.github.io/agent-interface/style',
  baseUrl: '/agent-interface/style/',

  projectName: 'style',
  organizationName: 'Deskpro',

  headerLinks: [
    {doc: 'intro', label: 'Docs'},
    // {blog: true, label: 'News'},
  ],

  headerIcon: 'img/dp-logo-white.svg',
  footerIcon: 'img/dp-logo.svg',
  favicon: 'img/favicon.png',

  colors: {
    primaryColor: '#4195d1',
    secondaryColor: '#205C3B',
  },

  copyright: 'Copyright © ' + new Date().getFullYear() + ' Deskpro',
  separateCss: ['../dist/style.css'],

  highlight: {
    theme: 'vs2015',
  },

  scripts: ['https://buttons.github.io/buttons.js', '/agent-interface/style/js/code-collapsed-toggle.js', '/agent-interface/style/js/jquery.js', '/agent-interface/style/js/demoscript.js'],

  onPageNav: 'separate',

  ogImage: 'img/dp-logo.svg',
  twitterImage: 'img/dp-logo.svg',

  markdownPlugins: [
    (md) => require('./md-preview-plugin.js')(md)
  ]
};

module.exports = siteConfig;
