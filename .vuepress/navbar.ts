import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/home",
  { 
    text: "Programs", 
    icon: "creative", 
    children: [
      { text: "Getting Started", link: "/courses/SoftwareDocumentation/", icon: "creative" },
      { text: "Be Concise", link: "/courses/concise/", icon: "creative" },
      { text: "Be Complete", link: "/courses/complete/", icon: "creative" },
      { text: "Be Accurate", link: "/courses/accurate/", icon: "creative" },
      { text: "Be Big Picture", link: "/courses/big-picture/", icon: "creative" },
      { text: "Put It In Practice", link: "/courses/practice/", icon: "creative" }
    ]},
  { text: "Resources", 
    icon: "note", 
    children: [
      { text: "Useful Links", link: "/resources/README.md"},
      { text: "References and Citations", link: "/resources/02.md"},
      { text: "Training Development Docs", link: "/resources/03.md"},
    ]},
  // { text: "Theme Docs", icon: "note", link: "https://vuepress-theme-hope.github.io/v2/" },
  // {
  //   text: "Posts",
  //   icon: "edit",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "Articles 1-4",
  //       icon: "edit",
  //       prefix: "article/",
  //       children: [
  //         { text: "Article 1", icon: "edit", link: "article1" },
  //         { text: "Article 2", icon: "edit", link: "article2" },
  //         "article3",
  //         "article4",
  //       ],
  //     },
  //     {
  //       text: "Articles 5-12",
  //       icon: "edit",
  //       children: [
  //         {
  //           text: "Article 5",
  //           icon: "edit",
  //           link: "article/article5",
  //         },
  //         {
  //           text: "Article 6",
  //           icon: "edit",
  //           link: "article/article6",
  //         },
  //         "article/article7",
  //         "article/article8",
  //       ],
  //     },
  //     { text: "Article 9", icon: "edit", link: "article9" },
  //     { text: "Article 10", icon: "edit", link: "article10" },
  //     "article11",
  //     "article12",
  //   ],
  // },
]);
