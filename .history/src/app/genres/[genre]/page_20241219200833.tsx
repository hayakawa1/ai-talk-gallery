import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGenres } from '@/utils/genreUtils';
import Image from 'next/image';

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {genre.subgenres.map(subgenre => (
          <div key={subgenre.name} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-2">{subgenre.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{subgenre.description}</p>
            <p className="text-sm text-gray-500 italic">例: {subgenre.example}</p>
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