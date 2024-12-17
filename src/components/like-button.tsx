"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface LikeButtonProps {
  postId: string
  initialLikes: number
}

export function LikeButton({ postId, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [isLiked, setIsLiked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLike = async () => {
    if (isLoading) return

    try {
      setIsLoading(true)
      const response = await fetch(`/api/posts/${postId}/like`, {
        method: "POST",
      })

      if (!response.ok) throw new Error()

      setLikes(prev => prev + (isLiked ? -1 : 1))
      setIsLiked(!isLiked)
    } catch (error) {
      console.error("Error liking post:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleLike}
      disabled={isLoading}
      className={cn(
        "flex items-center gap-1 text-sm transition-colors",
        isLiked ? "text-red-500" : "text-gray-500 hover:text-red-500"
      )}
    >
      <svg
        className={cn(
          "w-5 h-5 transition-transform",
          isLiked && "scale-110",
          isLoading && "animate-pulse"
        )}
        fill={isLiked ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span>{likes}</span>
    </button>
  )
} 