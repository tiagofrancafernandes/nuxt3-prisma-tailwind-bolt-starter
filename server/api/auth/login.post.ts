import { validateCredentials, setAuthSession } from '~/server/utils/auth';

export default defineEventHandler(async (event) => {
    const { email, password } = await readBody(event);

    if (!validateCredentials(email, password)) {
        throw createError({
            statusCode: 401,
            message: 'Invalid credentials',
        });
    }

    setAuthSession(event);

    return { success: true };
});
