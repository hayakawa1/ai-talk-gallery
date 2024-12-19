'use client';

import Link from 'next/link';
import { getGenres } from '@/utils/genreUtils';

export default function Sidebar() {
  const genres = getGenres();

  if (!genres || !Array.isArray(genres)) {
    console.error('Genres data is not available or not in the correct format');
    return null;
  }

  return (
    <aside className="w-64 shrink-0 h-screen sticky top-0 overflow-y-auto border-r bg-white">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">ジャンル</h2>
        <nav className="space-y-2">
          {genres.map(genre => (
            <Link 
              key={genre.name}
              href={`/genres/${encodeURIComponent(genre.name)}`}
              className="block py-2 px-3 rounded hover:bg-gray-100 transition-colors"
            >
              <span className="font-medium">{genre.name}</span>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {genre.description}
              </p>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
} 