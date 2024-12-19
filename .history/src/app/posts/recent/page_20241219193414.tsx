import Link from 'next/link';

const RECENT_POSTS = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `投稿タイトル ${i + 1}`,
  author: `user${i + 1}`,
  category: "カテゴリー",
  subCategory: "サブカテゴリー",
  createdAt: "2024-03-20",
  summary: "投稿の要約テキストがここに入ります...",
  likes: Math.floor(Math.random() * 100),
  comments: Math.floor(Math.random() * 50),
}));

export default function RecentPostsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">新着投稿一覧</h1>
      
      <div className="grid gap-6">
        {RECENT_POSTS.map(post => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>👤 {post.author}</span>
                <span>📂 {post.category}</span>
                <span>📅 {post.createdAt}</span>
                <span>❤️ {post.likes}</span>
                <span>💭 {post.comments}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 