import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create Users
  const user1 = await prisma.user.create({
    data: {
      username: "user1",
      email: "user1@example.com",
      password: "password123" // Note: In production, this should be hashed
    },
  })

  // Create Posts
  const post1 = await prisma.post.create({
    data: {
      title: "First Post",
      content: "This is the first post content",
      authorId: user1.id,
    },
  })

  // Create Comments
  await prisma.comment.create({
    data: {
      content: "Great post!",
      userId: user1.id,
      postId: post1.id,
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 