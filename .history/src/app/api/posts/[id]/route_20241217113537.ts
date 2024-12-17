import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

interface Context {
  params: {
    id: string
  }
}

export async function GET(
  req: Request,
  context: Context
) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: context.params.id },
    })

    if (!post) {
      return NextResponse.json(
        { error: "投稿が見つかりませんでした" },
        { status: 404 }
      )
    }

    // ビュー数を増やす
    await prisma.post.update({
      where: { id: context.params.id },
      data: { views: { increment: 1 } },
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error("GET /api/posts/[id] error:", error)
    return NextResponse.json(
      { error: "投稿の取得に失敗しました" },
      { status: 500 }
    )
  }
} 