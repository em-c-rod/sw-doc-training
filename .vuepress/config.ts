import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "en-US",
  title: "Technical Writing for Software Professionals",
  description: "A reference guide for professionals to write effective software documentation.",

  base: process.env.GITHUB_DEPLOY === "true" ? "/sw-doc-training/" : "/",
  theme,
});
