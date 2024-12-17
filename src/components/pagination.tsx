interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const showEllipsis = totalPages > 7

  let displayPages = pages
  if (showEllipsis) {
    if (currentPage <= 4) {
      displayPages = [...pages.slice(0, 5), -1, totalPages]
    } else if (currentPage >= totalPages - 3) {
      displayPages = [1, -1, ...pages.slice(totalPages - 5)]
    } else {
      displayPages = [1, -1, currentPage - 1, currentPage, currentPage + 1, -1, totalPages]
    }
  }

  return (
    <nav className="flex items-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg hover:bg-card disabled:opacity-50"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="flex items-center gap-1">
        {displayPages.map((page, i) =>
          page === -1 ? (
            <span key={`ellipsis-${i}`} className="px-2">...</span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === page
                  ? "bg-accent text-white"
                  : "hover:bg-card"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg hover:bg-card disabled:opacity-50"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  )
} 