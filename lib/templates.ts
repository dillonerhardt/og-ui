export const TEMPLATES = [
  {
    id: "standard-title",
    title: "Classic OG",
    description: "Simple and clean title layout",
    image: "/examples/standard-title.webp",
    inspiredBy: "Axiom",
    inspiredByUrl: "https://axiom.co",
    code: `import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <h1
          style={{
            fontSize: 96,
            background: 'linear-gradient(to bottom right, #000000, #666666)',
            backgroundClip: 'text',
            color: 'transparent',
            lineHeight: 1.2,
            textAlign: 'center',
          }}
        >
          Your Awesome Title
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}`,
  },
  {
    id: "middle-bg-img",
    title: "Impactful OG",
    description: "Centered text and logo with a background image",
    image: "/examples/middle-bg-img.webp",
    inspiredBy: "BetterStack",
    inspiredByUrl: "https://betterstack.com",
    code: `import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(https://your-background-image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '40px 60px',
            borderRadius: '20px',
          }}
        >
          <h1
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Your Title Here
          </h1>
          <p
            style={{
              fontSize: 40,
              color: '#ffffff99',
              textAlign: 'center',
              margin: '20px 0 0 0',
            }}
          >
            Subtitle goes here
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}`,
  },
  {
    id: "middle-solid",
    title: "Simple OG",
    description: "Centered custom font text with a solid background",
    image: "/examples/middle-solid.webp",
    inspiredBy: "Kit",
    inspiredByUrl: "https://kit.com",
    code: `import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #1a365d, #2563eb)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <h1
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          Your Title Here
        </h1>
        <p
          style={{
            fontSize: 40,
            color: '#ffffff99',
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          Subtitle goes here
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}`,
  },
  {
    id: "icon-og",
    title: "Icon OG",
    description: "Centered text with an icon and solid background",
    image: "/examples/solid-icon.webp",
    inspiredBy: "Prelude",
    inspiredByUrl: "https://prelude.com",
    code: `import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Replace with your icon/logo */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <h1
            style={{
              fontSize: 60,
              fontWeight: 'bold',
              color: 'white',
              marginTop: '30px',
              textAlign: 'center',
            }}
          >
            Your Title Here
          </h1>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}`,
  },
  {
    id: "app-og",
    title: "App OG",
    description: "Logo placement with background image",
    image: "/examples/logo-br-bg-img.webp",
    inspiredBy: "Flighty",
    inspiredByUrl: "https://flighty.com",
    code: `import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundImage: 'url(https://your-background-image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '40px',
        }}
      >
        <h1
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: 'white',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          Your Title Here
        </h1>
        
        {/* Replace with your logo */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="white"
          style={{
            filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.3))',
          }}
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}`,
  },
  {
    id: "center-img-solid",
    title: "Logo OG",
    description: "Centered image with solid background",
    image: "/examples/center-img-solid.webp",
    inspiredBy: "Dimitri Knight",
    inspiredByUrl: "https://dimitriknight.com",
    code: `import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {/* Replace with your image */}
          <img
            src="https://your-image.jpg"
            alt="Featured"
            style={{
              width: '400px',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
          <h1
            style={{
              fontSize: 48,
              fontWeight: 'bold',
              color: '#000000',
              textAlign: 'center',
            }}
          >
            Your Title Here
          </h1>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}`,
  },
  {
    id: "product-img-right",
    title: "Product OG",
    description: "Product showcase with right-aligned image",
    image: "/examples/product-img-right.webp",
    inspiredBy: "Supabase",
    inspiredByUrl: "https://supabase.com",
    code: `import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '40px',
          gap: '40px',
        }}
      >
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: '#000000',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            Product Name
          </h1>
          <p
            style={{
              fontSize: 32,
              color: '#666666',
              marginBottom: '30px',
            }}
          >
            Short product description goes here
          </p>
          <p
            style={{
              fontSize: 48,
              fontWeight: 'bold',
              color: '#000000',
            }}
          >
            $99
          </p>
        </div>
        
        {/* Replace with your product image */}
        <div style={{ flex: 1 }}>
          <img
            src="https://your-product-image.jpg"
            alt="Product"
            style={{
              width: '100%',
              height: '500px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}`,
  },
  {
    id: "event-og",
    title: "Event OG",
    description: "Great for event announcements. Vercel-inspired.",
    image: "/examples/vercel-ship.webp",
    inspiredBy: "Vercel",
    inspiredByUrl: "https://vercel.com",
    code: `import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: '#666666',
              marginBottom: '20px',
            }}
          >
            Just Shipped
          </div>
          <h1
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #fff, #999)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '40px',
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            Feature Name
          </h1>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {/* Replace with your logo */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="white"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span
              style={{
                fontSize: 24,
                color: '#ffffff',
              }}
            >
              Your Company
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}`,
  },
  {
    id: "news-og",
    title: "News OG",
    description: "Great for news articles with a headline and image",
    image: "/examples/news-og.webp",
    inspiredBy: "News",
    inspiredByUrl: "https://news.com",
  },
  {
    id: "blog-og",
    title: "Blog OG",
    description: "Blog post with image and title",
    image: "/examples/blog-og.webp",
    inspiredBy: "Blog",
    inspiredByUrl: "https://blog.com",
  },
];
