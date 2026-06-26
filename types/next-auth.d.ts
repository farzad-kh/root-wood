import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: "user" | "admin" | "superAdmin";
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role?: "user" | "admin" | "superAdmin";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
  }
}
