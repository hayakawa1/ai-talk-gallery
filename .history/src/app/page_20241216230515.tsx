import { PostForm } from "@/components/post-form"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* ヒーローセクション */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">ChatGPT Moments</h1>
        <p className="text-xl text-gray-400 mb-8">
          興味深いChatGPTとの会話を共有し、新しい発見を見つけましょう。
        </p>
        <button className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 mx-auto">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          会話を共有する
        </button>
      </div>

      {/* 注目の会話セクション */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">注目の会話</h2>
          <a href="#" className="text-accent hover:underline flex items-center gap-1">
            人気上位
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 会話カード */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-zinc-800/50 rounded-lg p-6 hover:bg-zinc-800/70 transition">
              <h3 className="text-lg font-semibold mb-2">プログラミング初心者への助言</h3>
              <p className="text-gray-400 mb-4 text-sm">
                プログラミング学習を始める人へのアドバイスをまとめました。
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>閲覧数: 2,987</span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    156
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    23
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* カテゴリーセクション */}
      <section>
        <h2 className="text-2xl font-bold mb-6">カテゴリー</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'おもしろい', icon: '✨' },
            { name: '哲学的', icon: '💡' },
            { name: '感動的', icon: '💭' },
            { name: '技術的', icon: '⚡' },
            { name: '学び', icon: '📚' },
            { name: 'その他', icon: '🔗' },
          ].map((category) => (
            <a
              key={category.name}
              href="#"
              className="flex flex-col items-center justify-center p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800/70 transition text-center"
            >
              <span className="text-2xl mb-2">{category.icon}</span>
              <span className="text-sm">{category.name}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
} 