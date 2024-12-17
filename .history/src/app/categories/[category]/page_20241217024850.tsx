import Link from "next/link"
import { PostCard } from "@/components/post-card"
import { notFound } from "next/navigation"
import { categories } from "@/components/category-filter"

interface Props {
  params: {
    category: string
  }
}

export default async function CategoryPage({ params }: Props) {
  // カテゴリーの存在チェック
  const category = categories.find(c => c.name === decodeURIComponent(params.category))
  if (!category) {
    notFound()
  }

  // 投稿を取得
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/posts?category=${params.category}`,
    { cache: "no-store" }
  )
  const data = await res.json()

  return (
    <div className="container py-8">
      <div className="max-w-5xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">
              ← トップページに戻る
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{category.icon}</span>
            <h1 className="text-3xl font-bold">{category.name}</h1>
          </div>
        </div>

        {/* 投稿一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.posts.map((post: any) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>

        {data.posts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            まだ投稿がありません
          </div>
        )}
      </div>
    </div>
  )
} 