import { ImageResponse } from "next/og";
import AppOg from "@/app/template/components/app-og";
import NewsOg from "@/app/template/components/news-og";
import BlogOg from "@/app/template/components/blog-og";
import EventOg from "@/app/template/components/event-og";
import { TEMPLATES } from "@/lib/templates";
import ClassicOg from "@/app/template/components/classic-og";
import ImpactfulOg from "@/app/template/components/impactful-og";
import IconOg from "@/app/template/components/icon-og";
import SimpleOg from "@/app/template/components/simple-og";
import LogoOg from "@/app/template/components/logo-og";
import ProductOg from "@/app/template/components/product-og";
import { ProfileOG } from "@/app/template/components/profile-og";

export const runtime = "edge";

const inter = fetch(
  new URL("@/assets/fonts/Inter/static/Inter_24pt-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (
    await fetch(url, {
      headers: {
        // Make sure it returns TTF.
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    })
  ).text();

  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status === 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("Failed to load font data");
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const templateId = searchParams.get("template") || "standard-title";

    // Find the template configuration
    const template = TEMPLATES.find((t) => t.id === templateId) || TEMPLATES[0];
    const defaults = template.defaults || {};

    // Get parameters with fallbacks to template defaults
    const title = searchParams.get("title") || defaults.title;
    const subtitle = searchParams.get("subtitle") || defaults.subtitle;
    const backgroundColor =
      searchParams.get("backgroundColor") || defaults.backgroundColor;
    const imageUrl = searchParams.get("imageUrl") || defaults.imageUrl;
    const description = searchParams.get("description") || defaults.description;
    const backgroundImage =
      searchParams.get("backgroundImage") || defaults.backgroundImage;
    const author = searchParams.get("author") || defaults.author;
    const website = searchParams.get("website") || defaults.website;
    const logoImage = searchParams.get("logoImage") || defaults.logoImage;
    const date = searchParams.get("date") || defaults.date;
    const location = searchParams.get("location") || defaults.location;
    const textColor = searchParams.get("textColor") || defaults.textColor;
    const appImage = searchParams.get("appImage") || defaults.appImage;
    const renderedText = `${title} ${subtitle} ${date} ${location} ${author} ${website} ${description}`;
    let component;
    switch (templateId) {
      case "classic-og":
        component = (
          <ClassicOg
            title={title}
            subtitle={subtitle}
            backgroundImage={backgroundImage}
            logoImage={logoImage}
          />
        );
        break;
      case "product-og":
        component = (
          <ProductOg
            title={title}
            description={description}
            imageUrl={imageUrl}
            backgroundImage={backgroundImage}
            backgroundColor={backgroundColor}
            logoImage={logoImage}
          />
        );
        break;
      case "icon-og":
        component = <IconOg title={title} backgroundColor={backgroundColor} />;
        break;
      case "simple-og":
        component = (
          <SimpleOg title={title} backgroundColor={backgroundColor} />
        );
        break;
      case "impactful-og":
        component = (
          <ImpactfulOg
            title={title}
            backgroundImage={backgroundImage}
            logoImage={logoImage}
          />
        );
        break;
      case "app-og":
        component = (
          <AppOg
            title={title}
            subtitle={subtitle}
            backgroundImage={backgroundImage}
            appImage={appImage}
          />
        );
        break;
      case "logo-og":
        component = (
          <LogoOg
            title={title}
            subtitle={subtitle}
            imageUrl={imageUrl}
            backgroundColor={backgroundColor}
          />
        );
        break;
      case "news-og":
        component = <NewsOg title={title} backgroundImage={backgroundImage} />;
        break;
      case "blog-og":
        component = (
          <BlogOg
            title={title}
            subtitle={subtitle}
            author={author}
            website={website}
          />
        );
        break;
      case "event-og":
        component = (
          <EventOg
            title={title}
            subtitle={subtitle}
            backgroundImage={backgroundImage}
            date={date}
            location={location}
            logoImage={logoImage}
            textColor={textColor}
            backgroundColor={backgroundColor}
          />
        );
        break;
      case "profile-og":
        component = (
          <ProfileOG
            title={title}
            subtitle={subtitle}
            description={description}
            imageUrl={imageUrl}
            backgroundColor={backgroundColor}
            website={website}
          />
        );
        break;
      default:
        component = <ClassicOg title={title} subtitle={subtitle} />;
    }

    return new ImageResponse(component, {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist",
          data: await loadGoogleFont("Geist+Mono", renderedText),
          style: "normal",
          weight: 700,
        },
        {
          name: "Inter",
          data: await inter,
          style: "normal",
          weight: 700,
        },
      ],
    });
  } catch (e) {
    console.error(e);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
