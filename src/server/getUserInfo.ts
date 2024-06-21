"use server";

import { prismaTest } from "@/lib/prisma";

export default async function getUserInfo(id: number) {
  const userInfo = await prismaTest.user.findFirst({
    where: {
      id,
    },
  });
  return userInfo;
}
