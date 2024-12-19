import { notFound } from 'next/navigation';
import Image from 'next/image';

// 仮のデータ取得関数
const getPost = (id: string) => {
  // 実際のデータベースから取得する処理に置き換える
  const post = {
    id,
    title: "GPTと一緒に短編小説を書いてみた",
    author: "creative_writer",
    category: "クリエイティブ系",
    subCategory: "物語・小説",
    createdAt: "2024-03-20",
    content: "今回、GPTと一緒に短編小説を書いてみました...",
    likes: 42,
    comments: [
      { id: 1, author: "user1", content: "とても面白かったです！", createdAt: "2024-03-20" },
      { id: 2, author: "user2", content: "参考になりました。", createdAt: "2024-03-20" },
    ],
    views: 156
  };
  return post;
};

export default function PostPage({ params }: { params: { id: string } }) {
  const post = getPost(params.id);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>👤 {post.author}</span>
            <span>📂 {post.category} / {post.subCategory}</span>
            <span>📅 {post.createdAt}</span>
          </div>
        </header>

        <div className="relative aspect-video mb-4">
          <Image
            src="/images/posts/thumbnails/sample.jpg"
            alt="投稿のサムネイル"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose max-w-none mb-8">
          {post.content}
        </div>

        <div className="flex items-center gap-4 text-gray-600 border-t pt-4">
          <button className="flex items-center gap-2 hover:text-blue-500">
            <span className="material-icons">favorite_border</span>
            <span>{post.likes}</span>
          </button>
          <span className="flex items-center gap-2">
            <span className="material-icons">visibility</span>
            <span>{post.views}</span>
          </span>
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">コメント ({post.comments.length})</h2>
          <div className="space-y-4">
            {post.comments.map(comment => (
              <div key={comment.id} className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">{comment.author}</span>
                  <span className="text-gray-500 text-sm">{comment.createdAt}</span>
                </div>
                <p>{comment.content}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
} 