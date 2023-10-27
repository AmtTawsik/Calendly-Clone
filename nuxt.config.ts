// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-calendly"],
  calendly: {
    /**
     * Setting to `false` disables the module.
     * @default true
     * @description Use this setting to disable the module.
     */
    isEnabled: true,
    /**
     * Loads the required CSS for Calendly directly into your app. Saves a HTTP Request.
     * @default true
     * @description Disable if you already load https://assets.calendly.com/assets/external/widget.css by yourself, or you want to load a custom CSS.
     */
    loadWidgetCSS: true,
    /**
     * Loads a required SVG Asset for Calendly directly into your app. Saves a HTTP Request.
     * @default true
     * @description Disable if you already load https://assets.calendly.com/assets/external/close-icon.svg by yourself, or you want to load a custom SVG.
     */
    loadWidgetCloseIconSvg: true,
  },
});
