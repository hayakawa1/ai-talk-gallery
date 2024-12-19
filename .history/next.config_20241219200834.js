/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false
  },
  images: {
    domains: [], // 外部画像ドメインがある場合はここに追加
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

module.exports = nextConfig 