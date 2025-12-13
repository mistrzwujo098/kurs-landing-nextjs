/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/egzamin',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'paulinaodmatematyki.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

export default nextConfig
