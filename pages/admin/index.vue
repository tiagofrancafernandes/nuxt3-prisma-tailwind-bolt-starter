<template>
    <div>
        <h1 class="text-2xl font-semibold text-gray-900">Welcome to Admin Panel</h1>
        <p class="mt-4">
            <NuxtLink to="/admin/posts" class="text-indigo-600 hover:text-indigo-900">Manage Posts →</NuxtLink>
        </p>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin',
    middleware: 'auth',
});
</script>
