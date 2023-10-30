import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  {
    icon: "creative",
    text: "Getting Started",
    prefix: "/courses/SoftwareDocumentation/",
    link: "/courses/SoftwareDocumentation/",
    children: "structure",
    collapsable: true
  },
  {
    icon: "creative",
    text: "Be Concise",
    prefix: "/courses/concise/",
    link: "/courses/concise/",
    children: "structure",
    collapsable: true
  },
  {
    icon: "creative",
    text: "Be Complete",
    prefix: "/courses/concise/",
    link: "/courses/complete/",
    children: "structure",
    collapsable: true
  },
  {
    icon: "creative",
    text: "Be Accurate",
    prefix: "/courses/concise/",
    link: "/courses/accurate/",
    children: "structure",
    collapsable: true
  },
  {
    icon: "creative",
    text: "Be Big Picture",
    prefix: "/courses/concise/",
    link: "/courses/big-picture/",
    children: "structure",
    collapsable: true
  },
  {
    icon: "creative",
    text: "Put It In Practice",
    prefix: "/courses/practice/",
    link: "/courses/practice/",
    children: "structure",
    collapsable: true
  },
  {
    icon: "note",
    text: "Resources",
    prefix: "/resources/",
    link: "/resources/",
    children: "structure",
    collapsable: true
  }
  // {
  //   icon: "note",
  //   text: "Installation",
  //   prefix: "/installation/",
  //   link: "/installation/",
  //   children: "structure",
  //   collapsable: true
  // }
  // {
  //   icon: "document",
  //   text: "Installation",
  //   prefix: "/installation/",
  //   link: "/installation/",
  //   children: "structure",
  // },
  // {
  //   text: "Articles",
  //   icon: "note",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "Articles 1-4",
  //       icon: "note",
  //       collapsable: true,
  //       prefix: "article/",
  //       children: ["article1", "article2", "article3", "article4"],
  //     },
  //     {
  //       text: "Articles 5-12",
  //       icon: "note",
  //       children: [
  //         {
  //           text: "Articles 5-8",
  //           icon: "note",
  //           collapsable: true,
  //           prefix: "article/",
  //           children: ["article5", "article6", "article7", "article8"],
  //         },
  //         {
  //           text: "Articles 9-12",
  //           icon: "note",
  //           children: ["article9", "article10", "article11", "article12"],
  //         },
  //       ],
  //     },
  //   ],
  // },
]);
