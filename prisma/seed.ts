import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // Create admin user
    await prisma.user.upsert({
        where: { email: 'admin@mail.com' },
        update: {},
        create: {
            email: 'admin@mail.com',
            password: 'password', // In a real app, this should be hashed
        },
    });

    // Create sample blog posts
    const posts = [
        {
            title: 'Getting Started with Nuxt 3',
            description: 'Learn how to build modern web applications with Nuxt 3',
            content:
                'Nuxt 3 is a powerful framework for building Vue.js applications. It provides an excellent developer experience with features like automatic routing, server-side rendering, and more.',
            slug: 'getting-started-with-nuxt-3',
            published: true,
        },
        {
            title: 'Understanding TypeScript',
            description: 'A comprehensive guide to TypeScript fundamentals',
            content:
                'TypeScript adds static typing to JavaScript, making it easier to build and maintain large applications. In this post, we explore the key concepts and benefits of using TypeScript.',
            slug: 'understanding-typescript',
            published: true,
        },
        {
            title: 'Web Development Best Practices',
            description: 'Essential tips for modern web development',
            content:
                'Following best practices in web development is crucial for building maintainable and scalable applications. This post covers important concepts like code organization, testing, and performance optimization.',
            slug: 'web-development-best-practices',
            published: true,
        },
    ];

    for (const post of posts) {
        await prisma.post.upsert({
            where: { slug: post.slug },
            update: {},
            create: post,
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
