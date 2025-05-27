import { prisma } from '~/server/utils/prisma';

export default defineEventHandler(async (event) => {
    const method = event.method;
    const requestData = await readBody(event);

    return await prisma.posts.findMany({
        orderBy: { createdAt: 'desc' },
    });
});
