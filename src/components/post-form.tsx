"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { categories } from "@/lib/categories"
import { postFormSchema, type PostFormData } from "@/lib/schemas"
import { Toast } from "@/components/ui/toast"

interface ToastState {
  message: string
  type: "success" | "error"
}

export function PostForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<ToastState | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PostFormData>({
    resolver: zodResolver(postFormSchema),
  })

  const onSubmit = async (data: PostFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("投稿の作成に失敗しました")
      }

      reset()
      setToast({
        message: "投稿が完了しました",
        type: "success",
      })
    } catch (error) {
      setToast({
        message: error instanceof Error ? error.message : "投稿に失敗しました",
        type: "error",
      })
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="url" className="block text-sm font-medium mb-2">
            ChatGPTの共有リンク
          </label>
          <input
            {...register("url")}
            type="url"
            id="url"
            placeholder="https://chatgpt.com/share/..."
            className="w-full px-3 py-2 bg-card rounded-lg border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          {errors.url && (
            <p className="mt-1 text-sm text-red-500">{errors.url.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="summary" className="block text-sm font-medium mb-2">
            会話の要約
          </label>
          <textarea
            {...register("summary")}
            id="summary"
            rows={3}
            placeholder="この会話の内容を簡潔に説明してください"
            className="w-full px-3 py-2 bg-card rounded-lg border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          {errors.summary && (
            <p className="mt-1 text-sm text-red-500">{errors.summary.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">カテゴリー</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <label
                key={category.name}
                className="inline-flex items-center"
              >
                <input
                  {...register("category")}
                  type="radio"
                  value={category.name}
                  className="sr-only"
                />
                <span className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer flex items-center gap-1 transition-colors ${
                  errors.category 
                    ? "border border-red-500" 
                    : "border border-transparent hover:bg-gray-50"
                } [&:has(input:checked)]:bg-accent [&:has(input:checked)]:text-white`}>
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </span>
              </label>
            ))}
          </div>
          {errors.category && (
            <p className="mt-1 text-sm text-red-500">{errors.category.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 disabled:opacity-50"
        >
          {isSubmitting ? "投稿中..." : "投稿する"}
        </button>
      </form>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  )
} 