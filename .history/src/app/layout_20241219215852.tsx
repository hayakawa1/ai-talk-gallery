import type { Metadata } from 'next'
import '@/styles/globals.css'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Talk Gallery',
  description: 'AIとの会話を共有するプラットフォーム',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-gray-50">
        {/* ヘッダー */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">AI Talk Gallery</Link>
            <div className="flex items-center gap-4">
              <Link href="/posts/create" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                投稿を作成
              </Link>
            </div>
          </div>
        </header>

        {/* メインコンテンツ */}
        <div className="flex min-h-[calc(100vh-4rem)]">
          <Sidebar />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
} 