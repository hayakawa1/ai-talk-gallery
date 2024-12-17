const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const users = [
  {
    username: "tech_enthusiast",
    email: "tech@example.com",
    password: "hashed_password_1", // 実際の実装では適切にハッシュ化する必要があります
  },
  {
    username: "creative_writer",
    email: "writer@example.com",
    password: "hashed_password_2",
  },
]

const posts = [
  {
    url: "https://chat.openai.com/share/abc123",
    title: "AIとの対話で学ぶ量子力学",
    summary: "複雑な量子力学の概念をAIと対話しながら紐解いていきます。",
    category: "学問",
    views: 5287,
    likes: 423,
    comments: 2,
  },
  {
    url: "https://chat.openai.com/share/def456",
    title: "小説の執筆テクニックを学ぶ",
    summary: "AIと一緒に物語の構造やキャラクター作りについて考察しました。",
    category: "創作",
    views: 4156,
    likes: 312,
    comments: 3,
  },
]

const comments = [
  {
    content: "とても分かりやすい解説でした！",
  },
  {
    content: "量子力学の不確定性原理について、もっと詳しく知りたいです。",
  },
  {
    content: "キャラクター作りのコツが参考になりました。",
  },
  {
    content: "プロットの組み立て方も解説してほしいです。",
  },
  {
    content: "AIとの対話で新しい視点が得られますね。",
  },
]

async function main() {
  console.log(`Start seeding ...`)

  // Create Users
  const createdUsers = []
  for (const user of users) {
    const createdUser = await prisma.user.create({
      data: user,
    })
    console.log(`Created user with id: ${createdUser.id}`)
    createdUsers.push(createdUser)
  }

  // Create Posts
  const createdPosts = []
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i]
    const createdPost = await prisma.post.create({
      data: {
        ...post,
        authorId: createdUsers[i % createdUsers.length].id,
      },
    })
    console.log(`Created post with id: ${createdPost.id}`)
    createdPosts.push(createdPost)
  }

  // Create Comments
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i]
    const createdComment = await prisma.comment.create({
      data: {
        ...comment,
        authorId: createdUsers[i % createdUsers.length].id,
        postId: createdPosts[i % createdPosts.length].id,
      },
    })
    console.log(`Created comment with id: ${createdComment.id}`)
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