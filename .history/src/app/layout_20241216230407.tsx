import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

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
        <div id="root" className="w-full h-full">
          <div className="flex flex-col h-full w-full bg-bolt-elements-background-depth-1">
            <header className="flex select-none items-center bg-bolt-elements-background-depth-1 pl-5 pr-4 border-b h-[60px] border-zinc-800">
              <div className="flex grow-1 basis-60 items-center gap-2 z-10">
                <a href="/" className="text-2xl font-semibold text-accent flex items-center">
                  AI Talk Gallery
                </a>
              </div>
              <div className="flex-1 select-text px-4 text-sm text-center">
              </div>
            </header>
            <main className="flex-1 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
} 