// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  content: {
    documentDriven: true,
    ignores: ["example", "config.json"],
    watch: {
      ws: {
        port: 3999,
      },
    },
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: "github-light",
        // Theme used if `html.dark`
        dark: "github-dark",
        // Theme used if `html.sepia`
        sepia: "monokai",
      },
      preload: [
        "diff",
        "json",
        "js",
        "jsx",
        "ts",
        "tsx",
        "css",
        "shell",
        "html",
        "md",
        "yaml",
      ],
    },
  },
});
