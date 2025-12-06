import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Vidyasagar Chamle - Product Manager';
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
          backgroundColor: '#0A0A0A',
          backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139, 92, 246, 0.15), transparent)',
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), rgba(59, 130, 246, 0.5), transparent)',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          {/* Name badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
              }}
            />
            <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '18px' }}>
              Open to Opportunities
            </span>
          </div>

          {/* Main heading */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 600,
              color: 'white',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Vidyasagar Chamle
          </h1>
          
          {/* Subtitle */}
          <p
            style={{
              fontSize: '32px',
              color: 'rgba(255, 255, 255, 0.5)',
              marginTop: '16px',
              marginBottom: '40px',
            }}
          >
            Product Manager Who Ships What Matters
          </p>

          {/* Tags */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
            }}
          >
            {['AI Products', 'Web3', 'SaaS'].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '16px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom decorative line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5), transparent)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}

