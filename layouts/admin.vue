<template>
    <div class="min-h-screen bg-gray-100">
        <nav class="bg-white border-b border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <div class="flex-shrink-0 flex items-center">
                            <NuxtLink to="/admin" class="text-xl font-bold">Admin Panel</NuxtLink>
                        </div>
                        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <NuxtLink to="/admin/posts" class="inline-flex items-center px-1 pt-1 text-gray-900">
                                Manage Posts
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4">
                        <NuxtLink to="/" class="text-gray-600 hover:text-gray-900">View Site</NuxtLink>
                        <button @click="logout" class="text-gray-600 hover:text-gray-900">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
        <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <slot />
        </main>
    </div>
</template>

<script setup>
const router = useRouter();

async function logout() {
    await $fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
}
</script>
