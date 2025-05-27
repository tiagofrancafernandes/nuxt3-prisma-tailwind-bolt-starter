<template>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md md:mb-5">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Admin Login</h2>
            <div class="w-full text-center py-1 md:mt-3">
                <NuxtLink to="/" class="text-center text-xl hover:underline font-normal text-gray-900">
                    View Site
                </NuxtLink>
            </div>
        </div>
        <slot />
    </div>
</template>
