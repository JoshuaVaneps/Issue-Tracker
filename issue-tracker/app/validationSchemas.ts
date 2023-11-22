import { z } from "zod";

enum Status {
  OPEN,
  IN_PROGRESS,
  CLOSED,
}
// we use zod here to validate our data and make sure
// it fits the parameters of our database
export const IssueSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().min(1, "Description is required"),
  status: z.nativeEnum(Status).optional(),
});
