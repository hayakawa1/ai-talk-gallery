import type { Metadata } from 'next'

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
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 