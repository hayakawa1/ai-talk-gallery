# AI Talk Gallery

AIとの会話を共有し、新しい発見を見つけるプラットフォーム。

## 機能

- ChatGPTの共有リンクを使用した会話の共有
- カテゴリー別の閲覧
- いいね、コメント機能
- マイページでの投稿管理

## 技術スタック

- Next.js 15.1.0
- TypeScript
- Prisma (PostgreSQL)
- Tailwind CSS

## セットアップ

1. リポジトリをクローン:
```bash
git clone https://github.com/hayakawa1/ai-talk-gallery.git
cd ai-talk-gallery
```

2. 依存関係をインストール:
```bash
npm install
```

3. 環境変数を設定:
`.env`ファイルを作成し、以下の内容を設定:
```env
DATABASE_URL="postgresql://postgres:1234@localhost:5432/ai_talk_gallery"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

4. データベースをセットアップ:
```bash
npx prisma generate
npx prisma db push
npm run seed
```

5. 開発サーバーを起動:
```bash
npm run dev
```

## デプロイ

このプロジェクトはVercelにデプロイされています。

1. [Vercel](https://vercel.com)でアカウントを作成
2. PostgreSQLデータベースを用意（例：[Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)）
3. 環境変数を設定
4. GitHubリポジトリと連携してデプロイ

## ライセンス

MIT
