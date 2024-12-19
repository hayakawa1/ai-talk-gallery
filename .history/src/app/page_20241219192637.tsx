import { Genre, getGenres } from '../utils/genreUtils';

export default async function Home() {
  const genres = getGenres();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">AIチャット共有プラットフォーム</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {genres.map((genre) => (
          <div key={genre.name} className="border rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-3">{genre.name}</h2>
            <p className="text-gray-600 mb-4">{genre.description}</p>
            
            <div className="space-y-3">
              {genre.subgenres.map((subgenre) => (
                <div key={subgenre.name} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold">{subgenre.name}</h3>
                  <p className="text-sm text-gray-500">{subgenre.description}</p>
                  <p className="text-xs text-gray-400 italic">例: {subgenre.example}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 