import { Genre, getGenres } from '../utils/genreUtils';
import Link from 'next/link';
import Image from 'next/image';

// モック投稿データ
const RECENT_POSTS = [
  {
    id: 1,
    title: "GPTと一緒小説を書いてみた",
    author: "creative_writer",
    category: "クリエイティブ系",
    subCategory: "物語・小説",
    createdAt: "2024-03-20",
    likes: 42,
    comments: 15
  },
  {
    id: 2,
    title: "AIに人生相談してみた結果...",
    author: "life_explorer",
    category: "ライフスタイル系",
    subCategory: "人生相談・お悩み解決",
    createdAt: "2024-03-19",
    likes: 128,
    comments: 34
  },
  // ... 他の新着投稿
];

const POPULAR_POSTS = [
  {
    id: 3,
    title: "GPTとの面白い対話集TOP10",
    author: "ai_entertainer",
    category: "エンタメ・SNS向け系",
    views: 15234,
    likes: 892,
    comments: 156
  },
  // ... 他の人気投稿
];

export default async function Home() {
  const genres = getGenres();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ヒーローセクション */}
      <div className="relative rounded-xl overflow-hidden mb-8">
        <div className="aspect-[21/9] relative">
          <Image
            src="/images/TOP.webp"
            alt="AI Talk Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4 text-white">AI Talk Gallery</h1>
            <p className="text-xl text-white mb-8">
              AIとの興味深い会話を共有しよう
            </p>
            
            {/* クイック投稿モジュール */}
            <div className="max-w-2xl w-full mx-auto bg-white/95 backdrop-blur p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">新しい会話を投稿</h3>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="タイトルを入力..."
                  className="flex-1 p-2 border rounded"
                />
                <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
                  投稿を作成
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 新着・人気投稿セクション */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* 新着投稿 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="material-icons mr-2">new_releases</span>
            新着投稿
          </h2>
          <div className="space-y-4">
            {RECENT_POSTS.map(post => (
              <div key={post.id} className="border-b pb-4">
                <Link href={`/posts/${post.id}`} className="block">
                  <h3 className="font-semibold hover:text-blue-500">
                    {post.title}
                  </h3>
                </Link>
                <div className="text-sm text-gray-500 flex gap-4 mt-2">
                  <Link href={`/genres/${encodeURIComponent(post.category)}`} className="hover:text-blue-500">
                    <span>📂 {post.category}</span>
                  </Link>
                  <span>👤 {post.author}</span>
                  <span>❤️ {post.likes}</span>
                  <span>💭 {post.comments}</span>
                </div>
              </div>
            ))}
          </div>
          <Link href="/posts/recent" className="text-blue-500 hover:underline block mt-4">
            もっと見る →
          </Link>
        </div>

        {/* 人気投稿 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="material-icons mr-2">trending_up</span>
            人気の投稿
          </h2>
          <div className="space-y-4">
            {POPULAR_POSTS.map(post => (
              <div key={post.id} className="border-b pb-4">
                <Link href={`/posts/${post.id}`} className="block">
                  <h3 className="font-semibold hover:text-blue-500">
                    {post.title}
                  </h3>
                </Link>
                <div className="text-sm text-gray-500 flex gap-4 mt-2">
                  <Link href={`/genres/${encodeURIComponent(post.category)}`} className="hover:text-blue-500">
                    <span>📂 {post.category}</span>
                  </Link>
                  <span>👤 {post.author}</span>
                  <span>👁️ {post.views}</span>
                  <span>❤️ {post.likes}</span>
                </div>
              </div>
            ))}
          </div>
          <Link href="/posts/popular" className="text-blue-500 hover:underline block mt-4">
            もっと見る →
          </Link>
        </div>
      </div>

      {/* ジャンル一覧 */}
      <h2 className="text-2xl font-bold mb-6">ジャンルから探す</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {genres.map((genre) => (
          <Link href={`/genres/${encodeURIComponent(genre.name)}`} key={genre.name} className="block">
            <div className="border rounded-lg overflow-hidden hover:shadow-xl transition">
              {/* ジャンル画像 */}
              <div className="relative aspect-video">
                <Image
                  src={`/images/${genre.name}.webp`}
                  alt={genre.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">{genre.name}</h2>
                <p className="text-gray-600 mb-4">{genre.description}</p>
                
                <div className="space-y-3">
                  {genre.subgenres.slice(0, 3).map((subgenre) => (
                    <Link 
                      href={`/genres/${encodeURIComponent(genre.name)}/${encodeURIComponent(subgenre.name)}`} 
                      key={subgenre.name}
                      className="block"
                    >
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-semibold hover:text-blue-500">
                          {subgenre.name}
                        </h3>
                      </div>
                    </Link>
                  ))}
                  {genre.subgenres.length > 3 && (
                    <p className="text-sm text-gray-500 italic">
                      他 {genre.subgenres.length - 3} 個のサブジャンル
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 