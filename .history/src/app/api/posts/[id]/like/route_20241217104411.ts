import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

interface RouteParams {
  params: {
    id: string
  }
}

export async function POST(
  request: Request,
  context: RouteParams
) {
  try {
    const { id } = context.params

    const post = await prisma.post.update({
      where: { id },
      data: {
        likes: {
          increment: 1,
        },
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