import { defineCollection, z } from "astro:content"

const classesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    week: z.number(),
    date: z.coerce.date(),
    difficulty: z.enum(["beginner", "intermediate", "advanced"]),
    duration: z.string(),
    instructor: z.string(),
    topics: z.array(z.string()),
  }),
})

export const collections = {
  classes: classesCollection,
}
