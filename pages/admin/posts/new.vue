<template>
    <div>
        <h1 class="text-2xl font-semibold text-gray-900 mb-6">Create New Post</h1>
        <form @submit.prevent="createPost" class="space-y-6 max-w-2xl">
            <div>
                <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                <input
                    id="title"
                    v-model="post.title"
                    type="text"
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3"
                />
            </div>
            <div>
                <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    id="description"
                    v-model="post.description"
                    rows="3"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-1 px-2"
                />
            </div>
            <div>
                <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
                <textarea
                    id="content"
                    v-model="post.content"
                    rows="10"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-1 px-2"
                />
            </div>
            <div class="flex justify-end space-x-4">
                <NuxtLink
                    to="/admin/posts"
                    class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                    Cancel
                </NuxtLink>
                <button
                    type="submit"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                    Create Post
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin',
    middleware: 'auth',
});

const router = useRouter();
const post = ref({
    title: '',
    description: '',
    content: '',
});

async function createPost() {
    await $fetch('/api/admin/posts', {
        method: 'POST',
        body: post.value,
    });
    router.push('/admin/posts');
}
</script>
