import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params

  try {
    const post = await prisma.post.findUnique({
      where: { id },
    })

    if (!post) {
      return NextResponse.json(
        { error: "投稿が見つかりませんでした" },
        { status: 404 }
      )
    }

    // ビュー数を増やす
    await prisma.post.update({
      where: { id },
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