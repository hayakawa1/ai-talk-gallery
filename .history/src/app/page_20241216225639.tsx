import { PostForm } from "@/components/post-form"

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">新規投稿</h2>
        <PostForm />
      </section>
    </div>
  )
} 