import { getAuthSession } from '../utils/auth';

export default defineEventHandler((event) => {
    const path = getRequestURL(event).pathname;

    if (path.startsWith('/api/admin')) {
        const session = getAuthSession(event);
        if (!session) {
            throw createError({
                statusCode: 401,
                message: 'Unauthorized',
            });
        }
    }
});
