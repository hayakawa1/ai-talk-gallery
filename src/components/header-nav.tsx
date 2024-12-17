"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "ホーム", href: "/" },
  { name: "人気", href: "/popular" },
  { name: "新着", href: "/latest" },
  { name: "マイページ", href: "/my" },
]

export function HeaderNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "px-3 py-2 text-sm font-medium rounded-md",
            pathname === item.href
              ? "bg-card text-bolt-elements-textPrimary"
              : "text-gray-500 hover:text-bolt-elements-textPrimary hover:bg-gray-50"
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
} 