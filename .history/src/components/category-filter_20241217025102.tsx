"use client"

import Link from "next/link"
import { categories } from "@/lib/categories"

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