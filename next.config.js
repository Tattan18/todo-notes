/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        react: require.resolve('react'),
        'react-dom': require.resolve('react-dom')
      }
    }
  }
}

module.exports = nextConfig
