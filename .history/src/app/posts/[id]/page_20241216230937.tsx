import Link from "next/link"

export default function PostPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 投稿ヘッダー */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link href="/" className="text-accent hover:underline">
            ← トップページに戻る
          </Link>
          <span>•</span>
          <Link href="/categories/技術的" className="text-accent hover:underline">
            技術的
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-4">プログラミング初心者への助言</h1>
        <p className="text-gray-600 mb-4">
          プログラミング学習を始める人へのアドバイスをまとめました。
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>2024年3月20日</span>
          <span>閲覧数: 2,987</span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            156
          </span>
        </div>
      </div>

      {/* 投稿本文 */}
      <div className="bg-card rounded-lg p-6 shadow-sm mb-8">
        <div className="prose prose-sm max-w-none">
          <h2>ChatGPTとの会話</h2>
          <p>
            この会話では、プログラミングを始めたい人向けに、効果的な学習方法やおすすめの言語、
            つまずきやすいポイントなどについて詳しく解説しています。
          </p>
          <a
            href="https://chat.openai.com/share/xxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:underline"
          >
            ChatGPTで会話を見る
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* コメントセクション（将来的な拡張用） */}
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">コメント</h2>
        <p className="text-gray-500 text-sm">
          コメント機能は現在開発中です。
        </p>
      </div>
    </div>
  )
} 