import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://em-c-rod.github.io/",
  author: {
    name: "Emily Rodriguez",
    url: "https://github.com/em-c-rod",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_h4r1xw8ppng.css",
  iconPrefix: "iconfont icon-",

  // logo: "/logo.svg",

  repo: "em-c-rod/sw-doc-training",

  // docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  // footer: "Apache-2.0 | Copyright © 2023",

  displayFooter: true,

  pageInfo: ["Original", "Date", "Category", "Tag", "ReadingTime"],

  // blog: {
  //   description: "A FrontEnd programmer",
  //   intro: "/intro.html",
  //   medias: {
  //     // Baidu: "https://example.com",
  //     // Bitbucket: "https://example.com",
  //     // Dingding: "https://example.com",
  //     // Discord: "https://example.com",
  //     // Dribbble: "https://example.com",
  //     // Email: "https://example.com",
  //     // Evernote: "https://example.com",
  //     // Facebook: "https://example.com",
  //     // Flipboard: "https://example.com",
  //     // Gitee: "https://example.com",
  //     // GitHub: "https://example.com",
  //     // Gitlab: "https://example.com",
  //     // Gmail: "https://example.com",
  //     // Instagram: "https://example.com",
  //     // Lines: "https://example.com",
  //     // Linkedin: "https://example.com",
  //     // Pinterest: "https://example.com",
  //     // Pocket: "https://example.com",
  //     // QQ: "https://example.com",
  //     // Qzone: "https://example.com",
  //     // Reddit: "https://example.com",
  //     // Rss: "https://example.com",
  //     // Steam: "https://example.com",
  //     // Twitter: "https://example.com",
  //     // Wechat: "https://example.com",
  //     // Weibo: "https://example.com",
  //     // Whatsapp: "https://example.com",
  //     // Youtube: "https://example.com",
  //     // Zhihu: "https://example.com",
  //   },
  // },

  // encrypt: {
  //   // config: {
  //   //   "/guide/encrypt.html": ["1234"],
  //   // },
  // },

  plugins: {
    // blog: {
    //   autoExcerpt: true,
    // },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using giscus
       */
      type: "giscus",
      repo: "em-c-rod/sw-doc-training",
      repoId: "R_kgDOH3sAZQ",
      category: "Ideas",
      categoryId: "DIC_kwDOH3sAZc4CRApY",
      mapping: "pathname",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
