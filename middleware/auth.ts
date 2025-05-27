export default defineNuxtRouteMiddleware(async (to) => {
    if (to.path.startsWith('/admin')) {
        try {
            await $fetch('/api/admin/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
        } catch (error) {
            return navigateTo('/login');
        }
    }
});
