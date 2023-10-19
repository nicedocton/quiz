// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  css: ['~/assets/styles/style.scss'],
  routeRules: {
    "/": { redirect: "/en" }
  },
  i18n: {
    // Adding English-Canada and Arabic-Egypt
    // as our supported locales. You can add as
    // many locales as you want here.
    locales: ["en", "pt", "es"],
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-US",
        file: "./locales/en.ts",
      },
      {
        code: "pt",
        name: "Português",
        iso: "pt-BR",
        file: "./locales/pt.ts",
      },
      {
        code: "es",
        name: "Español",
        iso: "es-ES",
        file: "./locales/es.ts",
      },
    ],

    // Used when active locale is not explicitly defined
    strategy: "prefix",
    defaultLocale: "en",

    // Disabling automatic locale detection (see below)
    detectBrowserLanguage: true,

    vueI18n: "./i18n.config.ts"
  },
})
