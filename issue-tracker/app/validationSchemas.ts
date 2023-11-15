import { z } from "zod";

// we use zod here to validate our data and make sure
// it fits the parameters of our database
export const createIssueSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().min(1, "Description is required"),
});
