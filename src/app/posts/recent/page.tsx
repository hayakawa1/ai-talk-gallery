'use client';

import Link from 'next/link';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

// モックデータ生成関数
const generatePosts = (start: number, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: start + i,
    title: `投稿タイトル ${start + i}`,
    author: `user${start + i}`,
    category: "カテゴリー",
    subCategory: "サブカテゴリー",
    createdAt: "2024-03-20",
    summary: "投稿の要約テキストがここに入ります...",
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 50),
  }));
};

// 初期データ
const INITIAL_POSTS = generatePosts(1, 10);

export default function RecentPostsPage() {
  // 次のページのデータを取得する関数
  const fetchMorePosts = async () => {
    // 実際のAPIコールに置き換える
    await new Promise(resolve => setTimeout(resolve, 1000)); // ローディングの表示確認用
    return generatePosts(items.length + 1, 10);
  };

  const { items, isLoading, observerTarget } = useInfiniteScroll(
    INITIAL_POSTS,
    fetchMorePosts
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">新着投稿一覧</h1>
      
      <div className="grid gap-6">
        {items.map(post => (
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

        {/* Intersection Observer のターゲット要素 */}
        <div ref={observerTarget} className="h-10 flex items-center justify-center">
          {isLoading && (
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
          )}
        </div>
      </div>
    </div>
  );
} 