import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
  post: {
    id: number;
    title: string;
    author: string;
    category: string;
    createdAt: string;
    likes: number;
    comments: number;
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="bg-white rounded-lg shadow p-3 hover:shadow-lg transition">
        <h2 className="text-lg font-bold mb-2">{post.title}</h2>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Image
              src={`/images/avatars/default.png`}
              alt={post.author}
              width={20}
              height={20}
              className="rounded-full"
            />
            <span>{post.author}</span>
          </div>
          <span>📂 {post.category}</span>
          <span>📅 {post.createdAt}</span>
          <span>❤️ {post.likes}</span>
          <span>💭 {post.comments}</span>
        </div>
      </div>
    </Link>
  );
} 