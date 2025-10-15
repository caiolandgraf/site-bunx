import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/seo';

export const runtime = 'edge';

export const alt = siteConfig.title;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          backgroundImage: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)',
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(249, 115, 22, 0.15) 0%, transparent 50%)',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            zIndex: 1,
          }}
        >
          {/* Logo/Brand */}
          <div
            style={{
              display: 'flex',
              fontSize: 120,
              fontWeight: 900,
              background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 40,
              letterSpacing: '-0.05em',
            }}
          >
            BunX
          </div>

          {/* Tagline */}
          <div
            style={{
              display: 'flex',
              fontSize: 42,
              color: '#e5e5e5',
              textAlign: 'center',
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Transformando Ideias em Realidade
          </div>

          {/* Description */}
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              color: '#a3a3a3',
              textAlign: 'center',
              maxWidth: 800,
              marginTop: 30,
              lineHeight: 1.4,
            }}
          >
            Soluções inovadoras em tecnologia
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: 'linear-gradient(90deg, #f97316 0%, #fb923c 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
