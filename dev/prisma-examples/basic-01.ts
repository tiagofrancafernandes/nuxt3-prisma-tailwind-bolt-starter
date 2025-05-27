/* npx tsx dev/prisma-examples/basic-01.ts */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const user = await prisma.users.findUnique({
    where: {
        email: 'admin@mail.com',
    },
});

console.log('user', user);
