import { prisma } from '~/server/utils/prisma';

export default defineEventHandler(async (event) => {
    const method = event.method;

    switch (method) {
        case 'GET':
        case 'POST':
            const requestData = await readBody(event);
            return await prisma.posts.findMany({
                orderBy: { createdAt: 'desc' },
            });
        default:
            throw createError({
                statusCode: 405,
                message: 'Method not allowed',
            });
    }
});
