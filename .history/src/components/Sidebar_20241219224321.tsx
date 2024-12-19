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
            <div key={genre.name} className="space-y-1">
              <Link 
                href={`/genres/${encodeURIComponent(genre.name)}`}
                className="block font-medium hover:text-blue-500"
              >
                {genre.name}
              </Link>
              <div className="pl-4 space-y-1">
                {genre.subgenres?.map(subgenre => (
                  <Link
                    key={subgenre.name}
                    href={`/genres/${encodeURIComponent(genre.name)}/${encodeURIComponent(subgenre.name)}`}
                    className="block text-sm text-gray-600 hover:text-blue-500"
                  >
                    {subgenre.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
} 