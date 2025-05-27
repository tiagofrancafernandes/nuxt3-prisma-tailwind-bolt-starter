<template>
    <div>
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Blog Posts</h1>
        <div class="grid gap-6 lg:grid-cols-2">
            <article v-for="post in posts" :key="post.id" class="bg-white shadow rounded-lg overflow-hidden">
                <div class="p-6">
                    <h2 class="text-xl font-semibold text-gray-900">
                        <NuxtLink :to="`/posts/${post.slug}`" class="hover:text-indigo-600">
                            {{ post.title }}
                        </NuxtLink>
                    </h2>
                    <p class="mt-2 text-gray-600">{{ post.description }}</p>
                    <div class="mt-4">
                        <NuxtLink :to="`/posts/${post.slug}`" class="text-indigo-600 hover:text-indigo-900">
                            Read more →
                        </NuxtLink>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>

<script setup>
const posts = ref([]);

onMounted(async () => {
    posts.value = await $fetch('/api/admin/posts');
});
</script>
