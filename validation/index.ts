const z = await import("zod");

export const Schema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().min(2).max(100).email(),
  message: z.string().min(2).max(1000),
});
