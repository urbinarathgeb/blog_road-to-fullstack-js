import { defineCollection, z } from "astro:content";

const classesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    module: z.number(),
    numberClass: z.number(),
    topics: z.array(z.string()),
    week: z.number(), // borrar
    difficulty: z.enum(["beginner", "intermediate", "advanced"]), // borrar
    duration: z.string(), // borrar
    instructor: z.string(), // borrar
  }),
});

export const collections = {
  classes: classesCollection,
};
