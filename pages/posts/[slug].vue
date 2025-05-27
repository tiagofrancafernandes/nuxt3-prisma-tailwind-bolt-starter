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

// onBeforeMount(async () => {
onMounted(async () => {
    try {
        const postData = await $fetch('/api/public/posts/show', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                slug: route.params.slug,
            }),
        });

        // post.value = posts.find((p) => p.slug === route.params.slug);
        post.value = postData?.slug === route.params?.slug ? postData : null;
    } catch (error) {
        if (error?.status !== undefined && !isNaN(Number(error?.status))) {
            throw createError({
                statusCode: error?.status || 422,
                message: error?.status === 404 ? 'Post not found' : 'An error occurred',
            });
        }

        // console.error(error);
    }
});
</script>
