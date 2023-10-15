// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create a user with a board
    const user = await prisma.user.create({
        data: {
            email: 'some@email.com',
            name: 'jimmy',
            password: '12345678',
            boards: {
                create: {
                    title: 'board name',
                    lists: {
                        create: [
                            {
                                title: 'list name 1',
                                cards: {
                                    create: [
                                        {
                                            title: 'card name 1',
                                        },
                                    ],
                                },
                            },
                            {
                                title: 'list name 2',
                                cards: {
                                    create: [
                                        {
                                            title:'card name 2',

                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            },
        },
    });
    console.log(user);
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
