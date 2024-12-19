import type { Metadata } from 'next'
import '@/styles/globals.css'
import Footer from '@/components/Footer'

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
      <body className="min-h-screen bg-gray-50 flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 