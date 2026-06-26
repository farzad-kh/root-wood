// app/server_action/login.ts
"use server";

import prisma from "@/prisma/client";
import bcrypt from "bcryptjs";

export async function loginUser(data: {
  email: string;
  password: string;
}) {
  const { email, password } = data;

  if (!email || !password) {
    return {
      success: false,
      message: "ایمیل و رمز الزامی است",
    };
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });
console.log(user);

  if (!user) {
    return {
      success: false,
      message: "کاربری با این ایمیل وجود ندارد",
    };
  }

  const isValid = await bcrypt.compare(password, user.password!);

  if (!isValid) {
    return {
      success: false,
      message: "رمز اشتباه است",
    };
  }

  return {
    success: true,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
    },
  };
}