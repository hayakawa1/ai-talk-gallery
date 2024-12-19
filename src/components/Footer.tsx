export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* サービス概要 */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-4">AI Talk Gallery</h3>
            <p className="text-gray-600 mb-4">
              AIとの対話を共有し、新しい発見や学びを得られるプラットフォーム。
              あなたの興味深い会話を共有しましょう。
            </p>
          </div>

          {/* クイックリンク */}
          <div>
            <h3 className="text-lg font-bold mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-blue-500">サービスについて</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-blue-500">利用規約</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-blue-500">プライバシーポリシー</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-blue-500">お問い合わせ</a></li>
            </ul>
          </div>

          {/* コミュニティ */}
          <div>
            <h3 className="text-lg font-bold mb-4">コミュニティ</h3>
            <ul className="space-y-2">
              <li><a href="/guidelines" className="text-gray-600 hover:text-blue-500">ガイドライン</a></li>
              <li><a href="/faq" className="text-gray-600 hover:text-blue-500">よくある質問</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-blue-500">ブログ</a></li>
              <li><a href="/events" className="text-gray-600 hover:text-blue-500">イベント情報</a></li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t mt-8 pt-8 text-center text-gray-500">
          <p>© 2024 AI Talk Gallery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 