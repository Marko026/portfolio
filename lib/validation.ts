import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),

  text: z.string().min(2, {
    message: "Text must be at least 2 characters.",
  }),
});
