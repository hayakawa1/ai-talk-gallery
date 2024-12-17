import Link from "next/link"

interface PostCardProps {
  id: number
  title: string
  summary: string
  views: number
  likes: number
  comments: number
  category: string
  date?: string
  rank?: number
  layout?: "grid" | "list"
}

export function PostCard({
  id,
  title,
  summary,
  views,
  likes,
  comments,
  category,
  date,
  rank,
  layout = "grid"
}: PostCardProps) {
  if (layout === "list") {
    return (
      <Link
        href={`/posts/${id}`}
        className="block bg-card rounded-lg p-6 hover:bg-card-hover transition shadow-sm"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{summary}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              {date && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {date}
                </span>
              )}
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {views.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            {rank && <span className="text-2xl font-bold text-accent">{rank}位</span>}
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                {likes.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/posts/${id}`}
      className="block bg-card rounded-lg p-6 hover:bg-card-hover transition shadow-sm h-full"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{summary}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span>閲覧数: {views.toLocaleString()}</span>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            {likes.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {comments.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  )
} 