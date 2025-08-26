// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    css: ['~/assets/css/tailwind.css'],
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
    supabase: {
        redirect: false,
        cookieOptions: {sameSite: 'lax'},
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_PUBLIC_KEY,
    },
    runtimeConfig: {
        SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY,
    }
})

