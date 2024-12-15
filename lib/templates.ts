export interface TemplateDefaults {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  imageUrl?: string;
  description?: string;
  backgroundImage?: string;
  author?: string;
  website?: string;
}

export const TEMPLATES = [
  {
    id: "classic-og",
    title: "Classic OG",
    description: "Clean and crisp, just like your morning coffee ☕",
    image: "/examples/standard-title.webp",
    inspiredBy: "Axiom",
    inspiredByUrl: "https://axiom.co",
    defaults: {
      title: "Generate dynamic  OpenGraph images.",
      subtitle: "https://og-ui.erh.im →",
      backgroundImage: "https://og-ui.erh.im/images/blue-right-hex.png",
      logoImage: "https://og-ui.erh.im/og-ui.svg",
    },
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
    id: "impactful-og",
    title: "Impactful OG",
    description: "Makes your content pop like fireworks 💥",
    image: "/examples/middle-bg-img.webp",
    inspiredBy: "BetterStack",
    inspiredByUrl: "https://betterstack.com",
    defaults: {
      title: "Embrace OpenGraph.",
      backgroundImage: "https://og-ui.erh.im/images/honeycomb-bg.png",
      logoImage: "https://og-ui.erh.im/og-ui.svg",
    },
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
    id: "simple-og",
    title: "Simple OG",
    description: "Minimalism at its finest ✨",
    image: "/examples/middle-solid.webp",
    inspiredBy: "Kit",
    inspiredByUrl: "https://kit.com",
    defaults: {
      title: "Geist Mono",
      backgroundColor: "#000000",
    },
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
    description: "Icons that steal the show 🎯",
    image: "/examples/solid-icon.webp",
    inspiredBy: "Prelude",
    inspiredByUrl: "https://prelude.com",
    defaults: {
      title: "OpenGraph",
      backgroundColor: "#41B1FD",
      textColor: "#000000",
    },
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
    description: "Your app's best outfit 📱",
    image: "/examples/logo-br-bg-img.webp",
    inspiredBy: "Flighty",
    inspiredByUrl: "https://flighty.com",
    defaults: {
      title: "Dynamic images",
      backgroundImage: "https://og-ui.erh.im/images/green-hex.png",
      appImage: "https://og-ui.erh.im/images/iphone-mockup.png",
    },
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
    id: "logo-og",
    title: "Logo OG",
    description: "Let your logo do the talking 🎤",
    image: "/examples/center-img-solid.webp",
    inspiredBy: "Dimitri Knight",
    inspiredByUrl: "https://dimitriknight.com",
    defaults: {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg",
      backgroundColor: "#dc0100",
    },
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
    id: "product-og",
    title: "Product OG",
    description: "Show off your goods in style 🛍️",
    image: "/examples/product-img-right.webp",
    inspiredBy: "Supabase",
    inspiredByUrl: "https://supabase.com",
    defaults: {
      title: "OG Templates",
      description: "Copy paste and customize for your project",
      imageUrl: "https://og-ui.erh.im/images/og-code-product.png",
      backgroundColor: "#121212",
      logoImage: "https://og-ui.erh.im/og-ui.svg",
    },
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
    description: "Event announcements that wow 🎉",
    image: "/examples/vercel-ship.webp",
    inspiredBy: "Vercel",
    inspiredByUrl: "https://vercel.com",
    defaults: {
      title: "OG Disrupt",
      backgroundImage: "https://og-ui.erh.im/images/og-man-graphic.jpg",
      date: "MAY 23, 2024",
      location: "NEW YORK CITY",
      logoImage: "https://og-ui.erh.im/og-ui.svg",
      textColor: "#000000",
    },
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
    description: "Headlines that turn heads 📰",
    image: "/examples/news-og.webp",
    inspiredBy: "News",
    inspiredByUrl: "https://news.com",
    defaults: {
      title: "OpenGraph is stuck in the 90s.",
      backgroundImage: "https://og-ui.erh.im/images/theo.jpeg",
    },
  },
  {
    id: "blog-og",
    title: "Blog OG",
    description: "Blog posts with pizzazz ✍️",
    image: "/examples/blog-og.webp",
    inspiredBy: "Blog",
    inspiredByUrl: "https://blog.com",
    defaults: {
      title: "Dynamic OG Images",
      subtitle: "February 4, 2016 — 21,839 views",
      author: "Dillon",
      website: "og-ui.erh.im",
    },
  },
  {
    id: "profile-og",
    title: "Profile OG",
    description: "Personal profiles that stand out 🪪",
    image: "/examples/profile-og.webp",
    inspiredBy: "Bento",
    inspiredByUrl: "https://bento.me",
    defaults: {
      title: "Luigi Mangione",
      subtitle: "Avenger",
      imageUrl: "https://og-ui.erh.im/images/luigi.jpg",
      backgroundColor: "#18181B",
      website: "og-ui.erh.im",
      description: "Building cool stuff on the internet",
    },
    code: `import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#18181B',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '60px',
          gap: '60px',
        }}
      >
        {/* Profile Image */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="https://your-profile-image.jpg"
            alt="Profile"
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '24px',
              objectFit: 'cover',
              border: '4px solid rgba(255,255,255,0.1)',
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              lineHeight: 1,
              margin: 0,
            }}
          >
            Your Name
          </h1>
          
          <p
            style={{
              fontSize: 36,
              color: '#a1a1aa',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Your Title / Role
          </p>

          <p
            style={{
              fontSize: 32,
              color: '#71717a',
              margin: 0,
              lineHeight: 1.4,
              maxWidth: '600px',
            }}
          >
            A brief description about yourself and what you do. Keep it concise and impactful.
          </p>

          {/* Social Links/Stats Container */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '12px',
            }}
          >
            {/* Stats Pill */}
            <div
              style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '12px 24px',
                borderRadius: '100px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ color: '#ffffff', fontSize: '24px' }}>
                yourwebsite.com
              </span>
            </div>
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
];
