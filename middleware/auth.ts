export default defineNuxtRouteMiddleware(async (to) => {
    if (to.path.startsWith('/admin')) {
        try {
            await $fetch('/api/admin/posts');
        } catch (error) {
            return navigateTo('/login');
        }
    }
});
