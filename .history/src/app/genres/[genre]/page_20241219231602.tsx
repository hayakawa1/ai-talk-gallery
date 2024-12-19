import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getGenres } from '@/utils/genreUtils';
import PostCard from '@/components/PostCard';

// モックデータ生成関数
const generateGenrePosts = (genreName: string, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `${genreName}の投稿 ${i + 1}`,
    author: `user${i + 1}`,
    category: genreName,
    createdAt: "2024-03-20",
    likes: (i + 1) * 10,
    comments: (i + 1) * 5,
  }));
};

export default function GenrePage({ params }: { params: { genre: string } }) {
  const genres = getGenres();
  const genre = genres.find(g => g.name === decodeURIComponent(params.genre));

  if (!genre) {
    notFound();
  }

  const GENRE_POSTS = generateGenrePosts(genre.name, 10);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* ジャンルヘッダー */}
      <div className="relative aspect-[21/9] mb-8 rounded-xl overflow-hidden">
        <Image
          src={`/images/${genre.name}.webp`}
          alt={genre.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">{genre.name}</h1>
            <p className="text-lg max-w-2xl mx-auto">{genre.description}</p>
          </div>
        </div>
      </div>

      {/* 投稿例 */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="text-sm font-semibold text-gray-500 mb-2">投稿例</h2>
        <p className="text-gray-600 italic">「{genre.example}」</p>
      </div>

      {/* フィルターバー */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 flex gap-4">
        <button className="text-blue-500 font-medium">新着</button>
        <button className="text-gray-500 hover:text-blue-500">人気</button>
        <button className="text-gray-500 hover:text-blue-500">トレンド</button>
      </div>

      {/* 投稿一覧 */}
      <div className="space-y-3">
        {GENRE_POSTS.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
} 