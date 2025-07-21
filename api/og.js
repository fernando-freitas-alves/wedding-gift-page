import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title') || 'Casamento Fernando & Flavia 2025'
    const description = searchParams.get('description') || 'Celebre conosco nosso casamento! Confirme sua presença em nosso convite virtual.'

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
            backgroundColor: '#F5F8ED',
            backgroundImage: 'linear-gradient(135deg, rgba(170, 178, 150, 0.3) 0%, rgba(115, 153, 92, 0.2) 100%)',
            position: 'relative',
            padding: '40px',
          }}
        >
          {/* Decorative background elements */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(213, 163, 105, 0.1), rgba(213, 163, 105, 0.05))',
              zIndex: 0,
            }}
          />
          
          {/* Main content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              zIndex: 1,
              position: 'relative',
            }}
          >
            {/* Wedding rings icon */}
            <div
              style={{
                fontSize: '80px',
                marginBottom: '20px',
                color: '#c09355',
              }}
            >
              💒
            </div>
            
            {/* Names */}
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#4A523A',
                margin: '0 0 10px 0',
                fontFamily: 'serif',
                lineHeight: 1.2,
              }}
            >
              {title}
            </h1>
            
            {/* Decorative line */}
            <div
              style={{
                width: '100px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #c09355, transparent)',
                margin: '20px 0',
              }}
            />
            
            {/* Description */}
            <p
              style={{
                fontSize: '24px',
                color: '#8C8273',
                margin: '0 0 30px 0',
                maxWidth: '600px',
                lineHeight: 1.4,
              }}
            >
              {description}
            </p>
            
            {/* Date */}
            <div
              style={{
                fontSize: '20px',
                color: '#73995C',
                fontWeight: '600',
                marginBottom: '20px',
              }}
            >
              23 NOVEMBRO 2025
            </div>
            
            {/* Call to action */}
            <div
              style={{
                background: 'linear-gradient(135deg, #AAB296 0%, #73995C 100%)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '25px',
                fontSize: '18px',
                fontWeight: '600',
                marginTop: '20px',
              }}
            >
              Confirme sua presença
            </div>
          </div>
          
          {/* Bottom decorative element */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              fontSize: '24px',
              color: '#c09355',
            }}
          >
            💝
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'serif',
            data: await fetch(
              new URL('https://fonts.googleapis.com/css2?family=Allura&display=swap')
            ).then((res) => res.arrayBuffer()),
            style: 'normal',
          },
        ],
      }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
} 