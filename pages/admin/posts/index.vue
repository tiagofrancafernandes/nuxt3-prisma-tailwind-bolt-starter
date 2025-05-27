<template>
    <div>
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-semibold text-gray-900">Manage Posts</h1>
            <NuxtLink
                to="/admin/posts/new"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
                New Post
            </NuxtLink>
        </div>

        <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" class="divide-y divide-gray-200">
                <li v-for="post in posts" :key="post.id" class="px-6 py-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-lg font-medium text-gray-900">{{ post.title }}</h3>
                            <p class="mt-1 text-sm text-gray-500">{{ post.description }}</p>
                        </div>
                        <div class="flex space-x-4">
                            <NuxtLink
                                :to="`/admin/posts/${post.id}/edit`"
                                class="text-indigo-600 hover:text-indigo-900"
                            >
                                Edit
                            </NuxtLink>
                            <button @click="deletePost(post.id)" class="text-red-600 hover:text-red-900">Delete</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin',
    middleware: 'auth',
});

const posts = ref([]);

async function fetchPosts() {
    posts.value = await $fetch('/api/admin/posts');
}

async function deletePost(id) {
    if (confirm('Are you sure you want to delete this post?')) {
        await $fetch(`/api/admin/posts/${id}`, { method: 'DELETE' });
        await fetchPosts();
    }
}

onMounted(() => {
    fetchPosts();
});
</script>
