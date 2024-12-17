import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Talk Gallery',
  description: 'AI Talk Gallery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="dark">
      <body className={inter.className}>
        <div className="flex flex-col h-full w-full bg-bolt-elements-background-depth-1">
          <header className="flex select-none items-center bg-bolt-elements-background-depth-1 pl-5 pr-4 border-b h-header border-transparent">
            <div className="flex grow-1 basis-60 items-center gap-2 text-bolt-elements-textPrimary">
              <a href="/" className="text-2xl font-semibold text-accent flex items-center">
                AI Talk Gallery
              </a>
            </div>
            <div className="flex-1 select-text px-4 text-sm text-center text-bolt-elements-textPrimary">
            </div>
          </header>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
} 