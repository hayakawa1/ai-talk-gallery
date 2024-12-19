'use client';

import Link from 'next/link';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

const generatePopularPosts = (start: number, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: start + i,
    title: `人気投稿 ${start + i}`,
    author: `user${start + i}`,
    category: "カテゴリー",
    views: Math.floor(Math.random() * 10000),
    likes: Math.floor(Math.random() * 1000),
    comments: Math.floor(Math.random() * 100),
  }));
};

const INITIAL_POSTS = generatePopularPosts(1, 10);

export default function PopularPostsPage() {
  const fetchMorePosts = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return generatePopularPosts(items.length + 1, 10);
  };

  const { items, isLoading, observerTarget } = useInfiniteScroll(
    INITIAL_POSTS,
    fetchMorePosts
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">人気投稿一覧</h1>
      
      <div className="grid gap-6">
        {items.map(post => (
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

        <div ref={observerTarget} className="h-10 flex items-center justify-center">
          {isLoading && (
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
          )}
        </div>
      </div>
    </div>
  );
} 