"use client"

import { useState } from "react"
import { PostCard } from "@/components/post-card"
import { Pagination } from "@/components/pagination"
import { CategoryFilter } from "@/components/category-filter"
import { usePosts } from "@/hooks/use-posts"
import { PostSkeleton } from "@/components/ui/skeleton"

export default function LatestPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentCategory, setCurrentCategory] = useState<string | null>(null)
  
  const { posts, totalPages, isLoading, error } = usePosts({
    category: currentCategory,
    page: currentPage,
  })

  return (
    <div className="container py-8">
      {/* ヘッダー */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">新着の会話</h1>
        <p className="text-gray-600">
          最近共有された興味深い会話をチェックしましょう。
        </p>
      </div>

      {/* フィルター */}
      <div className="mb-8">
        <CategoryFilter
          currentCategory={currentCategory}
          onCategoryChange={setCurrentCategory}
        />
      </div>

      {/* 投稿一覧 */}
      {error ? (
        <div className="text-center py-8 text-red-500">{error}</div>
      ) : isLoading ? (
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <PostSkeleton key={i} />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          投稿が見つかりませんでした
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} layout="list" />
          ))}
        </div>
      )}

      {/* ページネーション */}
      {!isLoading && posts.length > 0 && (
        <div className="mt-8 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  )
} 