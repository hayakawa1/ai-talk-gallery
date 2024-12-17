const { PrismaClient } = require('@prisma/client')

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
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-03-15'),
  },
  {
    url: "https://chat.openai.com/share/def456",
    title: "小説の執筆テクニックを学ぶ",
    summary: "AIと一緒に物語の構造やキャラクター作りについて考察しました。",
    category: "創作",
    views: 4156,
    likes: 312,
    comments: 45,
    createdAt: new Date('2024-03-16'),
    updatedAt: new Date('2024-03-16'),
  },
  // ... you can add more posts here
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
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 