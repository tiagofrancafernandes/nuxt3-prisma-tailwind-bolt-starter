import { prisma } from '~/server/utils/prisma';

export default defineEventHandler(async (event) => {
    const method = event.method;
    const id = parseInt(event.context.params.id);

    switch (method) {
        case 'PUT':
            const updatedPost = await readBody(event);
            return await prisma.posts.update({
                where: { id },
                data: {
                    title: updatedPost.title,
                    description: updatedPost.description,
                    content: updatedPost.content,
                    slug: updatedPost.title.toLowerCase().replace(/\s+/g, '-'),
                },
            });
        case 'DELETE':
            await prisma.posts.delete({
                where: { id },
            });
            return { success: true };
        default:
            throw createError({
                statusCode: 405,
                message: 'Method not allowed',
            });
    }
});
