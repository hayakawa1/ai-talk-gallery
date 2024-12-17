import Link from "next/link"
// PostCardを使用しない場合はインポートを削除
// import { PostCard } from "@/components/post-card"

export default function MyPage() {
  return (
    <div className="container py-8">
      <div className="max-w-5xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">マイページ</h1>
          <p className="text-gray-600">
            あなたの投稿した会話を管理できます。
          </p>
        </div>

        {/* 投稿一覧 */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">投稿した会話</h2>
            <Link
              href="/posts/new"
              className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/90"
            >
              新しい投稿
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 投稿カードのリスト */}
          </div>
        </div>

        {/* 統計情報 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">総投稿数</h3>
            <p className="text-3xl font-bold text-accent">0</p>
          </div>
          <div className="bg-card rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">総いいね数</h3>
            <p className="text-3xl font-bold text-accent">0</p>
          </div>
          <div className="bg-card rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">総閲覧数</h3>
            <p className="text-3xl font-bold text-accent">0</p>
          </div>
        </div>
      </div>
    </div>
  )
} 