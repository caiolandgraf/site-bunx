import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Otimizações de SEO
  compress: true,
  poweredByHeader: false,
  
  // Geração de sitemap
  trailingSlash: false,
  
  // Headers de segurança e SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
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
            value: 'strict-origin-when-cross-origin'
          },
        ],
      },
    ];
  },
  
  // Redirects úteis para SEO
  async redirects() {
    return [
      // Adicione redirects aqui se necessário
      // Exemplo:
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
