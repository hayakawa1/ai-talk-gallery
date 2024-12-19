import type { Metadata } from 'next'
import '@/styles/globals.css'

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
      <body className="min-h-screen bg-background">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 