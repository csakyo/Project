import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const { auth, handlers } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;

        let user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          user = await prisma.user.create({
            data: { email: credentials.email },
          });
        }

        return user;
      },
    }),
  ],
});
