import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    // TODO: 認証システム実装後、実際のユーザーIDを使用
    const dummyUser = await prisma.user.findFirst()
    if (!dummyUser) {
      return NextResponse.json(
        { error: "ユーザーが見つかりません" },
        { status: 404 }
      )
    }

    const posts = await prisma.post.findMany({
      where: {
        authorId: dummyUser.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: true,
      },
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error("GET /api/my/posts error:", error)
    return NextResponse.json(
      { error: "投稿の取得に失敗しました" },
      { status: 500 }
    )
  }
} 