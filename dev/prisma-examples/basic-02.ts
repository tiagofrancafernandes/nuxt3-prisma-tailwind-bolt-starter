/* npx tsx dev/prisma-examples/basic-02.ts */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const post = await prisma.posts.update({
        where: { id: 1 },
        data: { published: true },
    });
    console.log(post);
}

await main();
