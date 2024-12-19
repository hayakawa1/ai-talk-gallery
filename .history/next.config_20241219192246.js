/** @type {import('next').NextConfig} */
const nextConfig = {
  server: {
    host: '0.0.0.0',  // すべてのIPからのアクセスを許可
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/,
      type: "json",
    });
    return config;
  },
}

module.exports = nextConfig 