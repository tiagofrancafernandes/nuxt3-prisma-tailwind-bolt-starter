<template>
    <div class="min-h-screen bg-gray-50">
        <nav class="bg-white shadow">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <NuxtLink to="/" class="flex-shrink-0 flex items-center">
                            <span class="text-xl font-bold">Blog</span>
                        </NuxtLink>
                        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <NuxtLink to="/posts" class="inline-flex items-center px-1 pt-1 text-gray-900">
                                Posts
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <NuxtLink v-if="isAuthenticated" to="/admin" class="text-gray-600 hover:text-gray-900">
                            Admin
                        </NuxtLink>
                        <NuxtLink v-else to="/login" class="text-gray-600 hover:text-gray-900">Login</NuxtLink>
                    </div>
                </div>
            </div>
        </nav>
        <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
const authSession = useCookie('auth_session');
const isAuthenticated = computed(() => authSession.value === 'authenticated');
</script>
