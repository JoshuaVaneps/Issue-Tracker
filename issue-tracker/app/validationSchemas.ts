import { z } from "zod";
import { Status } from "@prisma/client";

export const IssueSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().min(1, "Description is required"),
  status: z.nativeEnum(Status).optional(),
});

export const UserSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});
