import { prisma } from '~/server/utils/prisma';

export default defineEventHandler(async (event) => {
    const method = event.method;

    switch (method) {
        case 'GET':
            return await prisma.posts.findMany({
                orderBy: { createdAt: 'desc' },
            });
        case 'POST':
            const post = await readBody(event);
            return await prisma.posts.create({
                data: {
                    title: post.title,
                    description: post.description,
                    content: post.content,
                    slug: post.title.toLowerCase().replace(/\s+/g, '-'),
                },
            });
        default:
            throw createError({
                statusCode: 405,
                message: 'Method not allowed',
            });
    }
});
