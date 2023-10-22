import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "en-US",
  title: "Software Documentation Training",
  description: "A reference guide for professionals to write effective software documentation.",

  base: process.env.GITHUB_DEPLOY === "true" ? "/docs/" : "/",
  theme,
});
