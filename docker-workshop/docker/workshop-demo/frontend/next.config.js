/** @type {import('next').NextConfig} */

const generateCspValues = () => {
  if (process?.env?.NODE_ENV.toLowerCase() === 'production') {
    // Build
    return `
      base-uri 'self';
      connect-src 'self' ${process.env.NEXT_PUBLIC_CONTACT_FORM_API_URL} *.google-analytics.com;
      img-src data: 'self' https://www.google-analytics.com;
      object-src 'none';
      script-src 'self' 'strict-dynamic' 'unsafe-inline' 'nonce-qnXV7EgLd8EprBfQVVv2' https://www.googletagmanager.com *.google-analytics.com;
      script-src-elem 'self' 'unsafe-inline' 'nonce-qnXV7EgLd8EprBfQVVv2' https://www.googletagmanager.com *.google-analytics.com;
      style-src 'self' 'unsafe-inline';  
    `
  }

  // Local development
  return `
      connect-src * 'unsafe-inline'; 
      default-src * 'unsafe-inline' 'unsafe-eval'; 
      frame-src *; 
      style-src * 'unsafe-inline';
      img-src * data: blob: 'unsafe-inline'; 
      script-src * 'unsafe-inline' 'unsafe-eval'; 
    `
}

const ContentSecurityPolicy = generateCspValues()

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'fullscreen=(), geolocation=()'
          }
        ]
      }
    ]
  },

  compiler: {
    styledComponents: true
  },

  reactStrictMode: true,

  swcMinify: true
}

module.exports = nextConfig
