'use client';

import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import PostCard from '@/components/PostCard';

// モックデータ生成関数
const generatePosts = (start: number, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: start + i,
    title: `投稿タイトル ${start + i}`,
    author: `user${start + i}`,
    category: "カテゴリー",
    createdAt: "2024-03-20",
    likes: (start + i) * 10,
    comments: (start + i) * 5,
  }));
};

const INITIAL_POSTS = generatePosts(1, 10);

export default function Home() {
  const fetchMorePosts = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return generatePosts(items.length + 1, 10);
  };

  const { items, isLoading, observerTarget } = useInfiniteScroll(
    INITIAL_POSTS,
    fetchMorePosts
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* フィルターバー */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 flex gap-4">
        <button className="text-blue-500 font-medium">新着</button>
        <button className="text-gray-500 hover:text-blue-500">人気</button>
        <button className="text-gray-500 hover:text-blue-500">トレンド</button>
      </div>

      {/* 投稿一覧 */}
      <div className="space-y-3">
        {items.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
        
        {/* 無限スクロール用のローディング要素 */}
        <div ref={observerTarget} className="h-8 flex items-center justify-center">
          {isLoading && (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500" />
          )}
        </div>
      </div>
    </div>
  );
} 