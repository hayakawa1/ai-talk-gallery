"use client"

import { useState } from "react"
import Link from "next/link"
import { PostCard } from "@/components/post-card"
import { Pagination } from "@/components/pagination"

const MOCK_POSTS = [
  {
    id: 1,
    title: "プログラミング初心者への助言",
    summary: "プログラミング学習を始める人へのアドバイスをまとめました。",
    views: 287,
    likes: 16,
    comments: 3,
    category: "学問",
  },
  {
    id: 2,
    title: "AIと創作活動について",
    summary: "小説執筆やアイデア出しにAIを活用する方法を議論しました。",
    views: 156,
    likes: 12,
    comments: 5,
    category: "創作",
  },
  {
    id: 3,
    title: "効率的な質問の仕方",
    summary: "より良い回答を得るためのプロンプトの書き方について話し合いました。",
    views: 423,
    likes: 45,
    comments: 8,
    category: "プロンプト",
  },
  {
    id: 4,
    title: "料理レシピの考案",
    summary: "AIと一緒に新しい料理のレシピを開発する過程を共有します。",
    views: 198,
    likes: 23,
    comments: 4,
    category: "実用",
  },
  {
    id: 5,
    title: "SF作品についての考察",
    summary: "AIと一緒にSF作品の設定や世界観について深く議論しました。",
    views: 312,
    likes: 28,
    comments: 6,
    category: "雑談",
  },
].map((post, index) => ({ ...post, date: `${index + 1}時間前` }))

export default function LatestPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10 // 仮の総ページ数

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
        <div className="bg-card rounded-lg p-4 shadow-sm">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-full bg-accent text-white text-sm font-medium">
              すべて
            </button>
            {[
              { name: '雑談', icon: '💭' },
              { name: '学問', icon: '📚' },
              { name: 'プロンプト', icon: '⚡' },
              { name: '創作', icon: '✨' },
              { name: '実用', icon: '🔧' },
            ].map((category) => (
              <button
                key={category.name}
                className="px-4 py-2 rounded-full bg-white text-gray-600 text-sm font-medium hover:bg-gray-50 flex items-center gap-1"
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 投稿一覧 */}
      <div className="space-y-6">
        {MOCK_POSTS.map((post) => (
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