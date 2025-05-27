// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
  devTools: true,
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    app: {
        head: {
            title: 'Admin Panel',
            meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        },
    },
    tailwindcss: {
        config: {
            content: ['./components/**/*.{vue,js,ts}', './layouts/**/*.vue', './pages/**/*.vue', './app.vue'],
        },
    },
});