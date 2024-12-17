import { z } from "zod"

export const postSchema = z.object({
  url: z.string()
    .url("有効なURLを入力してください")
    .startsWith("https://chat.openai.com/share/", "ChatGPTの共有リンクを入力してください"),
  summary: z.string()
    .min(1, "要約を入力してください")
    .max(200, "要約は200文字以内で入力してください"),
  category: z.enum(["雑談", "学問", "プロンプト", "創作", "実用"]),
  tags: z.string().optional(),
})

export type PostInput = z.infer<typeof postSchema> 