import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(
  _request: Request,
  context: { params: { id: string } }
) {
  try {
    const post = await prisma.post.update({
      where: { id: context.params.id },
      data: {
        likes: { increment: 1 },
      },
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error("POST /api/posts/[id]/like error:", error)
    return NextResponse.json(
      { error: "いいねの更新に失敗しました" },
      { status: 500 }
    )
  }
} 