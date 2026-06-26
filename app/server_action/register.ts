// app/actions/register.ts
"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function registerUser(formData: {
  name: string;
  email: string;
  password: string;
}) {
  const { name, email, password } = formData;

  if (!email || !password || !name) {
    throw new Error("Missing fields");
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return {
      success: false,
      error: "EMAIL_EXISTS",
      message: "این ایمیل قبلاً استفاده شده",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: true };
}
