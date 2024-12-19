import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGenres } from '@/utils/genreUtils';

export default function GenrePage({ params }: { params: { genre: string } }) {
  const genres = getGenres();
  const genre = genres.find(g => g.name === decodeURIComponent(params.genre));

  if (!genre) {
    notFound();
  }

  // 仮のジャンル別投稿データ
  const GENRE_POSTS = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `${genre.name}の投稿 ${i + 1}`,
    author: `user${i + 1}`,
    subCategory: genre.subgenres[i % genre.subgenres.length].name,
    createdAt: "2024-03-20",
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 50),
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{genre.name}</h1>
      <p className="text-gray-600 mb-8">{genre.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {genre.subgenres.map(subgenre => (
          <div key={subgenre.name} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-2">{subgenre.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{subgenre.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">最新の投稿</h2>
      <div className="grid gap-6">
        {GENRE_POSTS.map(post => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>👤 {post.author}</span>
                <span>📂 {post.subCategory}</span>
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