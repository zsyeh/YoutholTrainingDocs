import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "神秘的干货屋",
  description: "Training plan in Youthol",
  lastUpdated: true,
  base: "/YoutholTrainingDocs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "训练计划", link: "/training-plan/" },
      { text: "高级技巧", link: "/advanced-tech/" },
      { text: "编辑指南", link: "editor-guide" },
    ],

    sidebar: {
      "/training-plan/": [
        { text: "Welcome", link: "/training-plan/" },
        {
          text: "Level 1:",
          collapsed: false,
          items: [
            { text: "入门知识", link: "/training-plan/1-basic" },
            { text: "命令行基础", link: "/training-plan/1.1-terminal" },
            { text: "HTML知识", link: "/training-plan/2-html" },
            { text: "CSS入门知识", link: "/training-plan/3-basic-css" },
            { text: "CSS进阶", link: "/training-plan/4-advanced-css" },
          ],
        },
        {
          text: "Level 2:",
          collapsed: false,
          items: [
            { text: "JavaScript", link: "/training-plan/5-javascript" },
            { text: "Vue.js", link: "/training-plan/6-vue" },
            { text: "Node.js & Vite", link: "/training-plan/7-node" },
          ],
        },
        {
          text: "Level 3:",
          collapsed: true,
          items: [
            { text: "占位符", link: "/training-plan/9-server" },
            { text: "占位符", link: "/training-plan/10-python" },
            { text: "占位符", link: "/training-plan/11-django" },
          ],
        },
        {
          text: "Level 4:",
          collapsed: true,
          items: [
            { text: "占位符", link: "/training-plan/12-database" },
            { text: "占位符", link: "/training-plan/13-mongodb" },
            { text: "占位符", link: "/training-plan/14-react" },
          ],
        },
      ],
      "/advanced-tech/": [
        { text: "本部分简介", link: "/advanced-tech/" },
        {
          text: "高级技巧",
          items: [
            {
              text: "HTML 速写",
              link: "/advanced-tech/effective-edit-html",
            },
            {
              text: "Markdown 基本语法",
              link: "/advanced-tech/markdown.md"
            },
            {
              text: "Git 教学",
              link: "/advanced-tech/git.md"
            }
          ],
        },
      ],
    },
    
    footer: {
      message: 'Released under the MIT Licence.',
      copyright: 'Copyright © 2024 Youthol. All rights reserved.',
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/CSBigCaptain/YoutholTrainingDocs" },
    ],
    search: {
      provider: "local",
    },
    editLink: {
      pattern: 'https://github.com/CSBigCaptain/YoutholTrainingDocs/edit/main/docs/:path'
    }
  },
    markdown: {
      image: {
        lazyLoading: true,
      }
    },
})
