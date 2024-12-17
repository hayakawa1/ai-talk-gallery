/** @type {import('next').NextConfig} */
const nextConfig = {
  server: {
    host: '0.0.0.0',  // すべてのIPからのアクセスを許可
  },
}

module.exports = nextConfig 