import { z } from "zod"
import { categories } from "@/lib/categories"

const categoryNames = categories.map(c => c.name) as [string, ...string[]]

export const postFormSchema = z.object({
  url: z.string()
    .url("有効なURLを入力してください")
    .startsWith("https://chatgpt.com/share/", "ChatGPTの共有リンクを入力してください"),
  summary: z.string()
    .min(10, "要約は10文字以上で入力してください")
    .max(200, "要約は200文字以内で入力してください"),
  category: z.enum(categoryNames, {
    required_error: "カテゴリーを選択してください",
  }),
})

export type PostFormData = z.infer<typeof postFormSchema> 