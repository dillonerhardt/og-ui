export const DISABLE_PREVIEW_EDIT = true;

export interface TemplateDefaults {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  imageUrl?: string;
  description?: string;
  backgroundImage?: string;
  author?: string;
  website?: string;
  logoImage?: string;
  textColor?: string;
  date?: string;
  location?: string;
  appImage?: string;
}

export interface PropMetadata {
  description: string;
  type: "text" | "color" | "url";
  placeholder: string;
}

export interface Template {
  id: string;
  title: string;
  description: string;
  image: string;
  inspiredBy?: string;
  inspiredByUrl?: string;
  defaults?: TemplateDefaults;
  defaultsMetadata?: Record<string, PropMetadata>;
  code?: string;
}

export const TEMPLATES: Template[] = [
  {
    id: "classic-og",
    title: "Classic OG",
    description: "Clean and crisp, just like your morning coffee ☕",
    image: "/examples/standard-title.webp",
    inspiredBy: "Axiom",
    inspiredByUrl: "https://axiom.co",
    defaults: {
      title: "Generate dynamic OpenGraph images.",
      subtitle: "https://og-ui.erh.im →",
      backgroundImage: "https://og-ui.erh.im/images/blue-right-hex.png",
      logoImage: "https://og-ui.erh.im/og-ui.svg",
    },
    defaultsMetadata: {
      title: {
        description: "Main heading displayed on the image",
        type: "text",
        placeholder: "Your Awesome Title",
      },
      subtitle: {
        description: "Secondary text shown below the title",
        type: "text",
        placeholder: "https://your-site.com",
      },
      backgroundImage: {
        description: "URL of the background pattern/image",
        type: "url",
        placeholder: "https://example.com/background.png",
      },
      logoImage: {
        description: "URL of your logo image",
        type: "url",
        placeholder: "https://example.com/logo.svg",
      },
    },
    code: ``,
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
    defaultsMetadata: {
      title: {
        description: "Main heading displayed on the image",
        type: "text",
        placeholder: "Your Title Here",
      },
      backgroundImage: {
        description: "URL of the background pattern/image",
        type: "url",
        placeholder: "https://your-background-image.jpg",
      },
      logoImage: {
        description: "Event/brand logo URL",
        type: "url",
        placeholder: "https://example.com/logo.svg",
      },
    },
    code: ``,
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
    defaultsMetadata: {
      title: {
        description: "Main heading displayed on the image",
        type: "text",
        placeholder: "Your Title Here",
      },
      backgroundColor: {
        description: "Background color of the image",
        type: "color",
        placeholder: "#000000",
      },
    },
    code: ``,
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
    defaultsMetadata: {
      title: {
        description: "Main heading displayed on the image",
        type: "text",
        placeholder: "Your Title Here",
      },
      backgroundColor: {
        description: "Background color of the image",
        type: "color",
        placeholder: "#41B1FD",
      },
      textColor: {
        description: "Color of the text",
        type: "color",
        placeholder: "#000000",
      },
    },
    code: ``,
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
    defaultsMetadata: {
      title: {
        description: "Main heading displayed on the image",
        type: "text",
        placeholder: "Your Title Here",
      },
      backgroundImage: {
        description: "URL of the background pattern/image",
        type: "url",
        placeholder: "https://og-ui.erh.im/images/green-hex.png",
      },
      appImage: {
        description: "URL of the app image",
        type: "url",
        placeholder: "https://og-ui.erh.im/images/iphone-mockup.png",
      },
    },
    code: ``,
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
    defaultsMetadata: {
      imageUrl: {
        description: "URL of the logo image",
        type: "url",
        placeholder:
          "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg",
      },
      backgroundColor: {
        description: "Background color of the image",
        type: "color",
        placeholder: "#dc0100",
      },
    },
    code: ``,
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
    defaultsMetadata: {
      title: {
        description: "Main heading displayed on the image",
        type: "text",
        placeholder: "OG Templates",
      },
      description: {
        description: "Short product description",
        type: "text",
        placeholder: "Describe your product",
      },
      imageUrl: {
        description: "URL of the product image",
        type: "url",
        placeholder: "https://og-ui.erh.im/images/og-code-product.png",
      },
      backgroundColor: {
        description: "Background color of the image",
        type: "color",
        placeholder: "#121212",
      },
      logoImage: {
        description: "URL of your brand logo",
        type: "url",
        placeholder: "https://og-ui.erh.im/og-ui.svg",
      },
    },
    code: ``,
  },
  {
    id: "event-og",
    title: "Event OG",
    description: "Event announcements that wow 🎉",
    image: "/examples/vercel-ship.webp",
    inspiredBy: "Vercel Ship",
    inspiredByUrl: "https://vercel.com",
    defaults: {
      title: "OG Disrupt",
      backgroundImage: "https://og-ui.erh.im/images/og-ui-line.svg",
      date: "MAY 23, 2024",
      location: "NEW YORK CITY",
      logoImage: "https://og-ui.erh.im/og-ui.svg",
      textColor: "#ffffff",
      backgroundColor: "#111730",
    },
    defaultsMetadata: {
      title: {
        description: "Main heading displayed on the image",
        type: "text",
        placeholder: "OG Disrupt",
      },
      backgroundImage: {
        description: "URL of the background pattern/image",
        type: "url",
        placeholder: "https://og-ui.erh.im/images/og-man-graphic.jpg",
      },
      date: {
        description: "Event date",
        type: "text",
        placeholder: "MAY 23, 2024",
      },
      location: {
        description: "Event location",
        type: "text",
        placeholder: "NEW YORK CITY",
      },
      logoImage: {
        description: "Event/brand logo URL",
        type: "url",
        placeholder: "https://og-ui.erh.im/og-ui-dark.svg",
      },
      textColor: {
        description: "Color of the text",
        type: "color",
        placeholder: "#000000",
      },
    },
    code: ``,
  },
  {
    id: "news-og",
    title: "News OG",
    description: "Headlines that turn heads 📰",
    image: "/examples/news-og.webp",
    defaults: {
      title: "OpenGraph is stuck in the 90s.",
      backgroundImage: "https://og-ui.erh.im/images/theo.jpeg",
    },
    defaultsMetadata: {
      title: {
        description: "Main heading displayed on the image",
        type: "text",
        placeholder: "OpenGraph is stuck in the 90s.",
      },
      backgroundImage: {
        description: "URL of the background pattern/image",
        type: "url",
        placeholder: "https://og-ui.erh.im/images/theo.jpeg",
      },
    },
  },
  {
    id: "blog-og",
    title: "Blog OG",
    description: "Blog posts with pizzazz ✍️",
    image: "/examples/blog-og.webp",
    inspiredBy: "Guillermo Rauch's Blog",
    inspiredByUrl: "https://rauchg.com/",
    defaults: {
      title: "Dynamic OG Images",
      subtitle: "February 4, 2016 — 21,839 views",
      author: "Dillon",
      website: "og-ui.erh.im",
    },
    defaultsMetadata: {
      title: {
        description: "Main heading displayed on the image",
        type: "text",
        placeholder: "Dynamic OG Images",
      },
      subtitle: {
        description: "Publication date and stats",
        type: "text",
        placeholder: "February 4, 2016 — 21,839 views",
      },
      author: {
        description: "Author name",
        type: "text",
        placeholder: "Dillon",
      },
      website: {
        description: "Blog website",
        type: "text",
        placeholder: "og-ui.erh.im",
      },
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
      website: "Profile",
      description: "Passionate about healthcare and accountability",
    },
    defaultsMetadata: {
      title: {
        description: "Main heading displayed on the image",
        type: "text",
        placeholder: "Luigi Mangione",
      },
      subtitle: {
        description: "Job title or role",
        type: "text",
        placeholder: "Avenger",
      },
      imageUrl: {
        description: "Profile photo URL",
        type: "url",
        placeholder: "https://og-ui.erh.im/images/luigi.jpg",
      },
      backgroundColor: {
        description: "Background color",
        type: "color",
        placeholder: "#18181B",
      },
      website: {
        description: "Website or username",
        type: "text",
        placeholder: "Profile",
      },
      description: {
        description: "Brief bio or description",
        type: "text",
        placeholder: "Passionate about healthcare and accountability",
      },
    },
    code: ``,
  },
];
