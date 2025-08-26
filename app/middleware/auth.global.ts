export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser()
    // allow public routes:
    const publicPaths = ['/login', '/forgot']
    if (publicPaths.includes(to.path)) return
    if (!user.value) return navigateTo('/login')
})
