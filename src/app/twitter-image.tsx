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
        {/* Decorative top line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #8B5CF6, #3B82F6, transparent)',
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
          {/* Logo/Initials */}
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              backgroundColor: '#0A0A0A',
              border: '2px solid rgba(139, 92, 246, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
            }}
          >
            <span style={{ color: 'white', fontSize: '32px', fontWeight: 600 }}>VC</span>
          </div>

          {/* Main heading */}
          <h1
            style={{
              fontSize: '64px',
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
              fontSize: '28px',
              color: 'rgba(255, 255, 255, 0.5)',
              marginTop: '16px',
              marginBottom: '32px',
            }}
          >
            Product Manager Who Ships What Matters
          </p>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '48px',
            }}
          >
            {[
              { value: '7+', label: 'Products' },
              { value: '800K+', label: 'Users Impacted' },
              { value: '3+', label: 'Years' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: 'white', fontSize: '36px', fontWeight: 600 }}>
                  {stat.value}
                </span>
                <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px' }}>
                  {stat.label}
                </span>
              </div>
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
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #3B82F6, #8B5CF6, transparent)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}

