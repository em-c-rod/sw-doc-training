import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/home",
  { 
    text: "Programs", 
    icon: "creative", 
    children: [
      { text: "Software Documentation Class", link: "/courses/SoftwareDocumentation/", icon: "creative" },
      { text: "Extra", link: "/courses/Extra/", icon: "creative" },
    ]},
  { text: "Resources", 
    icon: "note", 
    children: [
      { text: "Class Resources", link: "/resources/README.md"},
      { text: "Codespace Resources", link: "/resources/02.md"},
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
