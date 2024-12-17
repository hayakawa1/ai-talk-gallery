const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const users = [
  {
    username: "tech_enthusiast",
    email: "tech@example.com",
    password: "hashed_password_1",
  },
  {
    username: "creative_writer",
    email: "writer@example.com",
    password: "hashed_password_2",
  },
  {
    username: "ai_researcher",
    email: "researcher@example.com",
    password: "hashed_password_3",
  }
]

const posts = [
  {
    url: "https://chatgpt.com/share/8f7d3c2a-1b4e-4f6a-9d8c-5e3a2b1c4d7e",
    title: "AIとの対話で学ぶ量子力学",
    summary: "複雑な量子力学の概念をAIと対話しながら紐解いていきます。",
    category: "学問",
    views: 5287,
    likes: 423,
    comments: 2,
  },
  {
    url: "https://chatgpt.com/share/2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
    title: "小説の執筆テクニックを学ぶ",
    summary: "AIと一緒に物語の構造やキャラクター作りについて考察しました。",
    category: "創作",
    views: 4156,
    likes: 312,
    comments: 3,
  },
  {
    url: "https://chat.openai.com/share/3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r",
    title: "効果的なプロンプトエンジニアリング入門",
    summary: "AIとの対話を最適化するためのプロンプト設計テクニックを解説。",
    category: "テクニック",
    views: 3892,
    likes: 267,
    comments: 2,
  },
  {
    url: "https://chat.openai.com/share/4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s",
    title: "AI倫理について考える",
    summary: "AIの発展に伴う倫理的な課題について、AIと深い議論を展開。",
    category: "議論",
    views: 2945,
    likes: 198,
    comments: 4,
  }
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
  {
    content: "プロンプトの具体例がもっとあると嬉しいです。",
  },
  {
    content: "倫理的な議論は今後ますます重要になりそうですね。",
  }
]

async function main() {
  try {
    console.log(`Start seeding ...`)

    // Delete existing data
    await prisma.comment.deleteMany()
    await prisma.post.deleteMany()
    await prisma.user.deleteMany()

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
  } catch (error) {
    console.error('Error during seeding:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 