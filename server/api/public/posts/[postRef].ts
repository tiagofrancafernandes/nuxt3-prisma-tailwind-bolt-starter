import { prisma } from '~/server/utils/prisma';

export default defineEventHandler(async (event) => {
    const method = event.method;
    // let id: number | null = parseInt(event?.context?.params?.id ?? '') || null;
    let postRef: any = event?.context?.params?.postRef || null;
    let postRefIsNumber: boolean = false;

    if (!postRef) {
        throw createError({
            statusCode: 422,
            message: 'Invalid post ref.',
        });
    }

    if (!isNaN(Number(postRef))) {
        postRef = Number(postRef);
        postRefIsNumber = true;
    }

    if (!['number', 'string'].includes(typeof postRef)) {
        throw createError({
            statusCode: 422,
            message: 'Invalid post ref.',
        });
    }

    if (postRef === 'show') {
        postRef = null;
    }

    switch (method) {
        case 'GET':
        case 'POST':
            const requestData = await readBody(event);
            let postId: any = parseInt(requestData?.id) || (postRefIsNumber ? postRef : 0) || null;
            let postSlug: any = (requestData?.slug || '')?.trim() || (!postRefIsNumber ? postRef : null) || null;

            if (postId !== null && postId <= 0) {
                throw createError({
                    statusCode: 422,
                    message: 'Invalid post.',
                });
            }

            let query: any = {};

            if (postSlug || (!postRefIsNumber && (postSlug || postRef))) {
                query.where = { slug: postSlug || postRef };
            }

            if (postRefIsNumber && (postId || postRef)) {
                query.where = { id: postId || postRef };
            }

            if (!Object.keys(query?.where || {}).length) {
                throw createError({
                    statusCode: 422,
                    message: 'Invalid request.',
                });
            }

            let record: any = await prisma.posts.findUnique(query);

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
