import { API_BASE_URL, API_KEY } from "@/utils/config";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },

      async authorize(credentials) {
        const response = await fetch(`${API_BASE_URL}/auth/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            api_key: API_KEY,
          },
          body: JSON.stringify(credentials),
        });

        const data = await response.json();

        if (data.error) {
          throw new Error("Invalid credentials");
        }

        const user = {
          name: data.user,
        };

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      user ? (token.user = user) : "";

      return token;
    },
    async session({ session, token }) {
      token ? (session.user = token.user) : "";

      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
});

export { handler as GET, handler as POST };
