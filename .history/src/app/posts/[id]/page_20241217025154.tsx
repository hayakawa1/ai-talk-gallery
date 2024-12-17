"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import type { Post } from "@prisma/client"
import { categories } from "@/lib/categories"
import { LikeButton } from "@/components/like-button"

export default function PostPage() {
  const { id } = useParams()
  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/posts/${id}`)
        if (!response.ok) throw new Error("投稿の取得に失敗しました")

        const data = await response.json()
        setPost(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "エラーが発生しました")
      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()
  }, [id])

  if (error) {
    return (
      <div className="container py-8">
        <div className="text-center py-8 text-red-500">{error}</div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="max-w-3xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/4" />
            <div className="h-32 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="container py-8">
        <div className="text-center py-8 text-gray-500">
          投稿が見つかりませんでした
        </div>
      </div>
    )
  }

  const category = categories.find(c => c.name === post.category)

  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        {/* ナビゲーション */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-accent">
              ホーム
            </Link>
            <span>/</span>
            <span>{post.title}</span>
          </div>
        </div>

        {/* ヘッダー */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              {category?.icon} {post.category}
            </span>
          </div>
        </div>

        {/* コンテンツ */}
        <div className="bg-card rounded-lg p-6 mb-8">
          <p className="text-gray-600 mb-6">{post.summary}</p>
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <span>会話を見る</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* 統計 */}
        <div className="flex items-center gap-6 text-sm">
          <span className="flex items-center gap-1 text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {post.views}
          </span>
          <LikeButton postId={post.id} initialLikes={post.likes} />
          <span className="flex items-center gap-1 text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {post.comments}
          </span>
        </div>
      </div>
    </div>
  )
} 