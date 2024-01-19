// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['assets/css/theme.css',
        'assets/css/theme.min.css'],

  modules: ['nuxt-aos'
  ],


  devtools: { enabled: true },

  vite: {
    define: { 'process.env.DEBUG': false },
  },
  
})
