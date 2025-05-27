import { H3Event } from 'h3';

const ADMIN_EMAIL = 'admin@mail.com';
const ADMIN_PASSWORD = 'password';

export function validateCredentials(email: string, password: string) {
    return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
}

export function getAuthSession(event: H3Event) {
    return getCookie(event, 'auth_session');
}

export function setAuthSession(event: H3Event) {
    setCookie(event, 'auth_session', 'authenticated', {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 24 hours
    });
}

export function clearAuthSession(event: H3Event) {
    setCookie(event, 'auth_session', '', {
        httpOnly: true,
        path: '/',
        maxAge: 0,
    });
}
