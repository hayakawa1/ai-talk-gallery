import Link from "next/link"

export default function PopularPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* ヘッダー */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link href="/" className="text-accent hover:underline">
            ← トップページに戻る
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-4">人気の投稿</h1>
        <p className="text-gray-600">
          過去30日間で最も注目を集めた会話をご紹介します。
        </p>
      </div>

      {/* フィルター */}
      <div className="mb-8">
        <div className="bg-card rounded-lg p-4 shadow-sm">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-full bg-accent text-white text-sm font-medium">
              30日間
            </button>
            <button className="px-4 py-2 rounded-full bg-white text-gray-600 text-sm font-medium hover:bg-gray-50">
              7日間
            </button>
            <button className="px-4 py-2 rounded-full bg-white text-gray-600 text-sm font-medium hover:bg-gray-50">
              24時間
            </button>
          </div>
        </div>
      </div>

      {/* 投稿一覧 */}
      <div className="space-y-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <Link
            key={i}
            href={`/posts/${i}`}
            className="block bg-card rounded-lg p-6 hover:bg-card-hover transition shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">プログラミング初心者への助言</h2>
                <p className="text-gray-600 mb-4">
                  プログラミング学習を始める人へのアドバイスをまとめました。
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    3日前
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    2,987
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-2xl font-bold text-accent">1位</span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    156
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 