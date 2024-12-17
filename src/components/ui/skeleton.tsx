export function PostSkeleton() {
  return (
    <div className="relative overflow-hidden bg-card rounded-lg p-6">
      <div className="space-y-3">
        <div className="h-6 w-2/3 bg-gray-200 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-4/5 bg-gray-200 rounded" />
        <div className="flex items-center gap-4 mt-4">
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-16 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="absolute -inset-x-4 -inset-y-6 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
          style={{ transform: 'translateX(-100%)' }}
        />
      </div>
    </div>
  )
} 