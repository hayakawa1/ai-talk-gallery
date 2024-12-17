import Link from "next/link"
import { PostForm } from "@/components/post-form"

export default function NewPostPage() {
  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="text-accent hover:underline">
              ← トップページに戻る
            </Link>
          </div>
          <h1 className="text-3xl font-bold mb-4">新しい会話を共有</h1>
          <p className="text-gray-600">
            興味深いChatGPTとの会話を共有して、他のユーザーと知見を共有しましょう。
          </p>
        </div>

        {/* フォーム */}
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <PostForm />
        </div>

        {/* ガイドライン */}
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4 text-blue-900">投稿のガイドライン</h2>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                共有するURLは必ずChatGPTの共有リンク（chat.openai.com/share/...）を使用してください。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                要約は会話の内容を簡潔に説明し、他のユーザーが興味を持てる内容にしましょう。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                適切なカテゴリーを選択することで、興味のあるユーザーに届きやすくなります。
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 