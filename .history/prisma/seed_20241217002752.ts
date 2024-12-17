import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const posts = [
  {
    url: "https://chat.openai.com/share/abc123",
    title: "AIとの対話で学ぶ量子力学",
    summary: "複雑な量子力学の概念をAIと対話しながら紐解いていきます。",
    category: "学問",
    views: 5287,
    likes: 423,
    comments: 56,
  },
  {
    url: "https://chat.openai.com/share/def456",
    title: "小説の執筆テクニックを学ぶ",
    summary: "AIと一緒に物語の構造やキャラクター作りについて考察しました。",
    category: "創作",
    views: 4156,
    likes: 312,
    comments: 45,
  },
  {
    url: "https://chat.openai.com/share/ghi789",
    title: "最強のプロンプトエンジニアリング",
    summary: "より精度の高い回答を引き出すためのテクニックを解説。",
    category: "プロンプト",
    views: 3923,
    likes: 289,
    comments: 38,
  },
  {
    url: "https://chat.openai.com/share/jkl012",
    title: "AIで実現する作業効率化",
    summary: "日常的なタスクをAIで効率化する方法を議論しました。",
    category: "実用",
    views: 3198,
    likes: 245,
    comments: 29,
  },
  {
    url: "https://chat.openai.com/share/mno345",
    title: "AIと考える未来社会",
    summary: "技術発展が社会に与える影響についてAIと深い議論を展開。",
    category: "雑談",
    views: 2912,
    likes: 198,
    comments: 42,
  },
]

async function main() {
  console.log(`Start seeding ...`)

  for (const post of posts) {
    const result = await prisma.post.create({
      data: post,
    })
    console.log(`Created post with id: ${result.id}`)
  }

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  }) 