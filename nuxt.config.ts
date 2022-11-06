// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        connection: {
            host: process.env.NUXT_DB_HOST || "localhost",
            name: process.env.NUXT_DB_NAME || "coop",
            user: process.env.NUXT_DB_USER || "root",
            password: process.env.NUXT_DB_PASSWORD || "alfonso"
        }
    }
})
