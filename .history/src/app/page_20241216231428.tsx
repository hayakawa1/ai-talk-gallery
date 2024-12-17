import Link from "next/link"
import { PostCard } from "@/components/post-card"
import { PostForm } from "@/components/post-form"

const MOCK_POSTS = [
  {
    id: 1,
    title: "プログラミング初心者への助言",
    summary: "プログラミング学習を始める人へのアドバイスをまとめました。",
    views: 2987,
    likes: 156,
    comments: 23,
    category: "学問",
  },
  {
    id: 2,
    title: "AIと哲学についての対話",
    summary: "意識や感情について、AIと深い議論を交わしました。",
    views: 1856,
    likes: 98,
    comments: 15,
    category: "雑談",
  },
  {
    id: 3,
    title: "効果的なプロンプトの書き方",
    summary: "より良い回答を得るためのプロンプトエンジニアリングのコツ。",
    views: 3421,
    likes: 234,
    comments: 45,
    category: "プロンプト",
  },
]

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* ヒーローセクション */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">ChatGPT Moments</h1>
        <p className="text-xl text-gray-600 mb-8">
          興味深いChatGPTとの会話を共有し、新しい発見を見つけましょう。
        </p>
      </div>

      {/* 投稿フォームセクション */}
      <section className="mb-16 max-w-2xl mx-auto">
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">会話を共有する</h2>
          <PostForm />
        </div>
      </section>

      {/* 注目の会話セクション */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">注目の会話</h2>
          <Link href="/popular" className="text-accent hover:underline flex items-center gap-1">
            人気上位
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_POSTS.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </section>

      {/* カテゴリーセクション */}
      <section>
        <h2 className="text-2xl font-bold mb-6">カテゴリー</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: '雑談', icon: '💭', href: '/categories/雑談' },
            { name: '学問', icon: '📚', href: '/categories/学問' },
            { name: 'プロンプト', icon: '⚡', href: '/categories/プロンプト' },
            { name: '創作', icon: '✨', href: '/categories/創作' },
            { name: '実用', icon: '🔧', href: '/categories/実用' },
          ].map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="flex flex-col items-center justify-center p-6 bg-card rounded-lg hover:bg-card-hover transition shadow-sm text-center"
            >
              <span className="text-2xl mb-2">{category.icon}</span>
              <span className="text-sm">{category.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
} 