const createTemplatePlugin = require('./template-plugin')

const { APP_URL_FINAL, PROJECT_NAME } = require('../../api/src/config')
const appURL = APP_URL_FINAL.slice(0, APP_URL_FINAL.length - 1)

const siteVariables = {
  title: 'Scoreboard', // Title for your website.
  tagline: 'Analytics for mappers',
  url: 'https://developmentseed.github.io',
  baseUrl: '/scoreboard/', // Base URL for your project */
  projectName: 'scoreboard',
  repoUrl: 'https://github.com/developmentseed/scoreboard',
  organizationName: 'developmentseed',
  osmProjectName: PROJECT_NAME,
  appURL
}

const siteConfig = {
  docsUrl: '',
  customDocsPath: 'docs/',
  markdownPlugins: [
    createTemplatePlugin(siteVariables)
  ],
  algolia: {
    apiKey: '193cfbb5bb7c23d258f9bed0d6a22707',
    indexName: 'developmentseed_scoreboard'
  },

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'users/getting-started', label: 'Getting Started' },
    { doc: 'admin/overview', label: 'Administration' }
  ],

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  // headerIcon: 'img/docusaurus.svg',
  // footerIcon: 'img/docusaurus.svg',
  // favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#4FCA9E',
    secondaryColor: '#353533'
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  // copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  // ogImage: 'img/docusaurus.png',
  // twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true
}

module.exports = Object.assign(siteVariables, siteConfig)
