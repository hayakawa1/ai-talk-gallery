"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { postSchema, type PostInput } from "@/lib/schemas"

const categories = ["雑談", "学問", "プロンプト", "創作", "実用"] as const

export function PostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PostInput>({
    resolver: zodResolver(postSchema),
  })

  const onSubmit = async (data: PostInput) => {
    try {
      // TODO: APIエンドポイントに投稿を送信
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="url" className="block text-sm font-medium mb-1">
          ChatGPTの共有リンク
        </label>
        <input
          {...register("url")}
          type="url"
          id="url"
          placeholder="https://chat.openai.com/share/..."
          className="w-full px-3 py-2 bg-card rounded-lg border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        {errors.url && (
          <p className="mt-1 text-sm text-red-500">{errors.url.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="summary" className="block text-sm font-medium mb-1">
          要約
        </label>
        <textarea
          {...register("summary")}
          id="summary"
          rows={3}
          placeholder="会話の内容を簡単に説明してください"
          className="w-full px-3 py-2 bg-card rounded-lg border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
        />
        {errors.summary && (
          <p className="mt-1 text-sm text-red-500">{errors.summary.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium mb-1">
          カテゴリー
        </label>
        <select
          {...register("category")}
          id="category"
          className="w-full px-3 py-2 bg-card rounded-lg border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="">カテゴリーを選択</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="mt-1 text-sm text-red-500">{errors.category.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 disabled:opacity-50 text-white font-bold py-2 px-4 rounded-lg"
      >
        {isSubmitting ? "投稿中..." : "投稿する"}
      </button>
    </form>
  )
} 