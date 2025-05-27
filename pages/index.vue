<template>
    <div class="max-w-3xl mx-auto py-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Welcome to Our Blog</h1>
        <p class="text-lg text-gray-600 mb-8">Check out our latest posts and stay updated with our content.</p>
        <NuxtLink
            to="/posts"
            class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
            View Blog Posts
        </NuxtLink>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'default',
});
</script>
