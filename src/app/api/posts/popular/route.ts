import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const period = searchParams.get("period") ?? "30d"
    const page = parseInt(searchParams.get("page") ?? "1")
    const limit = 10
    const skip = (page - 1) * limit

    // 期間に応じたフィルタリング
    const date = new Date()
    switch (period) {
      case "24h":
        date.setHours(date.getHours() - 24)
        break
      case "7d":
        date.setDate(date.getDate() - 7)
        break
      case "30d":
        date.setDate(date.getDate() - 30)
        break
    }

    const where = {
      ...(category ? { category } : {}),
      createdAt: {
        gte: date,
      },
    }

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where,
        skip,
        take: limit,
        orderBy: [
          { views: "desc" },
          { likes: "desc" },
          { comments: "desc" },
        ],
      }),
      prisma.post.count({ where }),
    ])

    return NextResponse.json({
      posts,
      totalPages: Math.ceil(total / limit),
    })
  } catch (error) {
    console.error("GET /api/posts/popular error:", error)
    return NextResponse.json(
      { error: "投稿の取得に失敗しました" },
      { status: 500 }
    )
  }
} 