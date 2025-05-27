<template>
    <div class="max-w-3xl mx-auto">
        <article v-if="post" class="prose lg:prose-xl">
            <h1>{{ post.title }}</h1>
            <p class="text-gray-600">{{ post.description }}</p>
            <div class="mt-8">{{ post.content }}</div>
        </article>
        <div v-else class="text-center py-12">
            <p class="text-gray-600">Post not found</p>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const post = ref(null);

onMounted(async () => {
    const posts = await $fetch('/api/admin/posts');
    post.value = posts.find((p) => p.slug === route.params.slug);
});
</script>
