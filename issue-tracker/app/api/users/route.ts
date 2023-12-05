import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { UserSchema } from "../../validationSchemas";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = UserSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const password = await bcrypt.hash(body.password, 10);
  const newUser = await prisma.user.create({
    data: { name: body.name, email: body.email, password: password },
  });
  return NextResponse.json(newUser, { status: 201 });
}
