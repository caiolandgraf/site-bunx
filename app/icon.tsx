import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'BunX';
export const size = {
  width: 1200,
  height: 1200,
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
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          backgroundImage: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 400,
            fontWeight: 900,
            background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            letterSpacing: '-0.05em',
          }}
        >
          BunX
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
