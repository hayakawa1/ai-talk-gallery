"use client"

import { useState } from "react"
import Link from "next/link"

export const categories = [
  { name: '雑談', icon: '💭' },
  { name: '学問', icon: '📚' },
  { name: 'プロンプト', icon: '⚡' },
  { name: '創作', icon: '✨' },
  { name: '実用', icon: '🔧' },
] as const

export function CategoryFilter() {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={`/categories/${category.name}`}
          className="px-4 py-2 rounded-full text-sm font-medium bg-card hover:bg-card-hover transition flex items-center gap-1"
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </Link>
      ))}
    </div>
  )
} 