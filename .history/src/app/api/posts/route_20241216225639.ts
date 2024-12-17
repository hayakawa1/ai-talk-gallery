import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { postSchema } from "@/lib/schemas"
import { fetchPageTitle } from "@/lib/utils"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = postSchema.parse(body)
    
    const title = await fetchPageTitle(validatedData.url)
    
    const post = await prisma.post.create({
      data: {
        ...validatedData,
        title,
      },
    })
    
    return NextResponse.json(post)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "投稿の作成に失敗しました" },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    })
    
    return NextResponse.json(posts)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "投稿の取得に失敗しました" },
      { status: 500 }
    )
  }
} 