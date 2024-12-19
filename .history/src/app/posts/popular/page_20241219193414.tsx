import Link from 'next/link';

const POPULAR_POSTS = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `人気投稿 ${i + 1}`,
  author: `user${i + 1}`,
  category: "カテゴリー",
  views: Math.floor(Math.random() * 10000),
  likes: Math.floor(Math.random() * 1000),
  comments: Math.floor(Math.random() * 100),
}));

export default function PopularPostsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">人気投稿一覧</h1>
      
      <div className="grid gap-6">
        {POPULAR_POSTS.map(post => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>👤 {post.author}</span>
                <span>📂 {post.category}</span>
                <span>👁️ {post.views}</span>
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