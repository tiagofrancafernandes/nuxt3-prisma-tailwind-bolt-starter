import { PrismaClient } from '@prisma/client'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    try {
        const method = event.method;

        switch (method) {
            case 'GET':
                return await prisma.post.findMany({
                    orderBy: { createdAt: 'desc' },
                });
            case 'POST':
                const post = await readBody(event);
                return await prisma.post.create({
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
    } catch (error) {
        console.error('API Error:', error);
        throw createError({
            statusCode: 500,
            message: 'Internal server error',
        });
    }
});