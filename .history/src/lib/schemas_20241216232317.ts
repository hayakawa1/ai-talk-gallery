import { z } from "zod"

export const postFormSchema = z.object({
  url: z.string()
    .url("有効なURLを入力してください")
    .startsWith("https://chat.openai.com/share/", "ChatGPTの共有リンクを入力してください"),
  summary: z.string()
    .min(10, "要約は10文字以上で入力してください")
    .max(200, "要約は200文字以内で入力してください"),
  category: z.enum(["雑談", "学問", "プロンプト", "創作", "実用"], {
    required_error: "カテゴリーを選択してください",
  }),
})

export type PostFormData = z.infer<typeof postFormSchema> 