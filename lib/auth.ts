import { getServerSession, NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/db"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "admin@iqlabs.id" },
        password: { label: "Password", type: "password", placeholder: "Any password works" }
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;
        
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (user) {
          return { id: user.id, name: user.name, email: user.email, role: user.role };
        }
        
        // Auto-create for demo purposes if not found
        const newUser = await prisma.user.create({
          data: {
            email: credentials.email,
            name: credentials.email.split('@')[0],
            role: credentials.email.includes('admin') ? 'ADMIN' : 'USER'
          }
        });

        return { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        (session.user as any).role = token.role;
        (session.user as any).id = token.id;
      }
      return session;
    }
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET || 'fallback-secret-for-demo',
};

export async function getSession() {
  return await getServerSession(authOptions)
}

export async function getCurrentUser() {
  const session = await getSession()
  return session?.user
}
