import NextAuth from "next-auth";

// Minimal Edge-safe auth JUST for middleware
export const { auth: edgeAuth } = NextAuth({
  providers: [], // <-- NO Prisma, NO Credentials, NO bcrypt
  secret: process.env.AUTH_SECRET,
});
