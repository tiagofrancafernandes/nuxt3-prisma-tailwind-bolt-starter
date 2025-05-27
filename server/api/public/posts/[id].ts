import { prisma } from '~/server/utils/prisma';

export default defineEventHandler(async (event) => {
    const method = event.method;
    let id: number | null = parseInt(event?.context?.params?.id ?? '') || null;

    switch (method) {
        case 'GET':
        case 'POST':
            const requestData = await readBody(event);
            id = id || parseInt(requestData?.id) || 0;

            if (!id || id <= 0) {
                throw createError({
                    statusCode: 422,
                    message: 'Invalid request',
                });
            }

            let record: any = await prisma.posts.findUnique({
                where: { id },
            });

            if (record) {
                return record;
            }

            throw createError({
                statusCode: 404,
                message: 'Record not found',
            });
        default:
            throw createError({
                statusCode: 405,
                message: 'Method not allowed',
            });
    }
});
