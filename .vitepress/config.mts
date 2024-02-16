import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "良月玖的博客",
  description: "心有所向，日复一日，必有精进",
  lastUpdated: true,
  // markdown: {
  //   toc: {
  //     level: [1, 2, 3],
  //   }
  // },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/20240125' },
      { text: 'Note', link: '/note/markdown-examples' }
    ],

    sidebar: {
      '/blog/': [
        {
          text: '文章',
          collapsed: false,
          items: [
            { text: 'Hello, World!', link: '/blog/20240125' },
            { text: 'JavaScript的原型与原型链', link: '/blog/20240126' },
            { text: 'JavaScript的浅拷贝与深拷贝', link: '/blog/20240129' },
            { text: 'React中常用的Hook', link: '/blog/20240201' },
            { text: '从零实现pinia', link: '/blog/20240215' },
            { text: 'Windows安装Docker Desktop并迁移', link: '/blog/20240216' },
          ]
        }
      ],
      '/note/': [
        {
          text: '笔记',
          collapsed: false,
          items: [
            { text: 'Markdown Examples', link: '/note/markdown-examples' },
            { text: 'Runtime API Examples', link: '/note/api-examples' }
          ]
        }
      ]
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Stream1998' }
    ]
  }
})
