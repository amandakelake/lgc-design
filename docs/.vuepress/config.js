module.exports = {
  title: 'Lgc Design',
  description: 'Lgc Design Vuepress Docs',
  base: "/lgc-design-vuepress-docs/",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}