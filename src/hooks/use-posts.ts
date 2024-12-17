"use client"

import { useState, useEffect } from "react"
import type { Post } from "@prisma/client"

interface UsePostsOptions {
  category?: string | null
  page?: number
}

interface PostsResponse {
  posts: Post[]
  totalPages: number
}

export function usePosts({ category, page = 1 }: UsePostsOptions = {}) {
  const [posts, setPosts] = useState<Post[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        const params = new URLSearchParams()
        if (category) params.set("category", category)
        if (page) params.set("page", String(page))

        const response = await fetch(`/api/posts?${params}`)
        if (!response.ok) throw new Error("投稿の取得に失敗しました")

        const data: PostsResponse = await response.json()
        setPosts(data.posts)
        setTotalPages(data.totalPages)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "エラーが発生しました")
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [category, page])

  return { posts, totalPages, isLoading, error }
} 