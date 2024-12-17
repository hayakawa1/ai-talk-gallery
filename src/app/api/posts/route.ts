import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { postFormSchema } from "@/lib/schemas"
import { fetchPageTitle } from "@/lib/utils"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = postFormSchema.parse(body)

    const title = await fetchPageTitle(validatedData.url)

    const dummyUser = await prisma.user.findFirst()
    if (!dummyUser) {
      throw new Error("ユーザーが見つかりません")
    }

    const post = await prisma.post.create({
      data: {
        ...validatedData,
        title,
        authorId: dummyUser.id,
      },
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error("POST /api/posts error:", error)
    return NextResponse.json(
      { error: "投稿の作成に失敗しました" },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const page = parseInt(searchParams.get("page") ?? "1")
    const limit = 10
    const skip = (page - 1) * limit

    const where = category ? { category } : {}

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.post.count({ where }),
    ])

    return NextResponse.json({
      posts,
      totalPages: Math.ceil(total / limit),
    })
  } catch (error) {
    console.error("GET /api/posts error:", error)
    return NextResponse.json(
      { error: "投稿の取得に失敗しました" },
      { status: 500 }
    )
  }
} 