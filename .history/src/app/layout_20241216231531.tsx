import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { HeaderNav } from '@/components/header-nav'
import Link from 'next/link'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ChatGPT Moments',
  description: 'Share interesting ChatGPT conversations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
              <div className="flex items-center gap-8">
                <Link href="/" className="text-2xl font-semibold text-accent">
                  ChatGPT Moments
                </Link>
                <HeaderNav />
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="/posts/new"
                  className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/90"
                >
                  投稿する
                </Link>
              </div>
            </div>
          </header>
          <main>
            {children}
          </main>
          <footer className="border-t py-8 mt-16">
            <div className="container mx-auto px-4 text-center text-sm text-gray-500">
              <p>© 2024 ChatGPT Moments. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
} 