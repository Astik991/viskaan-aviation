/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'airhex.com',
      },
      {
        protocol: 'https',
        hostname: 'seeklogo.com',
      },
      {
        protocol: 'https',
        hostname: 'seekvectorlogo.com',
      },
      {
        protocol: 'https',
        hostname: 'commons.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.aai.aero',
      },
      {
        protocol: 'https',
        hostname: 'www.gmrgroup.in',
      },
      {
        protocol: 'https',
        hostname: 'www.menziesaviation.com',
      },
      {
        protocol: 'https',
        hostname: 'www.globe-ground-india.com',
      },
      {
        protocol: 'https',
        hostname: 'taj-sats.com',
      },
      {
        protocol: 'https',
        hostname: 'www.wfs.com',
      },
      {
        protocol: 'https',
        hostname: 'www.firstflightcourier.com',
      },
      {
        protocol: 'https',
        hostname: 'menziesaviation.com',
      },
      {
        protocol: 'https',
        hostname: 'img1.wsimg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.tajsats.com',
      },
      {
        protocol: 'https',
        hostname: 'iconlogovector.com',
      },
      {
        protocol: 'https',
        hostname: 'firstflightme.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig