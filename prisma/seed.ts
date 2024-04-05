import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      hashedPwd: 'hashedpassword123', // Remember to hash passwords
      username: 'adminUser',
      role: 'admin',
    },
  });

  const user = await prisma.user.create({
    data: {
      email: 'user@example.com',
      hashedPwd: 'hashedpassword456', // Remember to hash passwords
      username: 'normalUser',
      role: 'user',
    },
  });

  const moderator = await prisma.user.create({
    data: {
      email: 'moderator@example.com',
      hashedPwd: 'hashedpassword789', // Remember to hash passwords
      username: 'moderatorUser',
      role: 'moderator',
    },
  });

  console.log({ admin, user, moderator });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
