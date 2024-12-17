"use client"

import { useState } from "react"
import { PostCard } from "@/components/post-card"
import { Pagination } from "@/components/pagination"
import { CategoryFilter } from "@/components/category-filter"
import { PeriodFilter } from "@/components/period-filter"

const MOCK_POSTS = [
  {
    id: 1,
    title: "AIとの対話で学ぶ量子力学",
    summary: "複雑な量子力学の概念をAIと対話しながら紐解いていきます。",
    views: 5287,
    likes: 423,
    comments: 56,
    category: "学問",
    rank: 1,
  },
  {
    id: 2,
    title: "小説の執筆テクニックを学ぶ",
    summary: "AIと一緒に物語の構造やキャラクター作りについて考察しました。",
    views: 4156,
    likes: 312,
    comments: 45,
    category: "創作",
    rank: 2,
  },
  {
    id: 3,
    title: "最強のプロンプトエンジニアリング",
    summary: "より精度の高い回答を引き出すためのテクニックを解説。",
    views: 3923,
    likes: 289,
    comments: 38,
    category: "プロンプト",
    rank: 3,
  },
  {
    id: 4,
    title: "AIで実現する作業効率化",
    summary: "日常的なタスクをAIで効率化する方法を議論しました。",
    views: 3198,
    likes: 245,
    comments: 29,
    category: "実用",
    rank: 4,
  },
  {
    id: 5,
    title: "AIと考える未来社会",
    summary: "技術発展が社会に与える影響についてAIと深い議論を展開。",
    views: 2912,
    likes: 198,
    comments: 42,
    category: "雑談",
    rank: 5,
  },
].map((post) => ({ ...post, date: "3日前" }))

export default function PopularPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentCategory, setCurrentCategory] = useState<string | null>(null)
  const [currentPeriod, setCurrentPeriod] = useState<string>("30d")
  const totalPages = 10

  const filteredPosts = currentCategory
    ? MOCK_POSTS.filter(post => post.category === currentCategory)
    : MOCK_POSTS

  return (
    <div className="container py-8">
      {/* ヘッダー */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">人気の会話</h1>
        <p className="text-gray-600">
          注目を集めている会話をチェックしましょう。
        </p>
      </div>

      {/* 期間フィルター */}
      <div className="mb-4">
        <PeriodFilter
          currentPeriod={currentPeriod}
          onPeriodChange={setCurrentPeriod}
        />
      </div>

      {/* カテゴリーフィルター */}
      <div className="mb-8">
        <CategoryFilter
          currentCategory={currentCategory}
          onCategoryChange={setCurrentCategory}
        />
      </div>

      {/* 投稿一覧 */}
      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} {...post} layout="list" />
        ))}
      </div>

      {/* ページネーション */}
      <div className="mt-8 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  )
} 