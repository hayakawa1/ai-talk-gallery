"use client"

import { useState } from "react"

export const categories = [
  { name: '雑談', icon: '💭' },
  { name: '学問', icon: '📚' },
  { name: 'プロンプト', icon: '⚡' },
  { name: '創作', icon: '✨' },
  { name: '実用', icon: '🔧' },
] as const

interface CategoryFilterProps {
  onCategoryChange: (category: string | null) => void
  currentCategory?: string | null
}

export function CategoryFilter({ onCategoryChange, currentCategory = null }: CategoryFilterProps) {
  return (
    <div className="bg-card rounded-lg p-4 shadow-sm">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            currentCategory === null
              ? "bg-accent text-white"
              : "bg-white text-gray-600 hover:bg-gray-50"
          }`}
        >
          すべて
        </button>
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => onCategoryChange(category.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 ${
              currentCategory === category.name
                ? "bg-accent text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
} 