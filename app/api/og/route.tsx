import { ImageResponse } from "next/og";
import StandardTitle from "@/app/template/components/standard-title";
import ProductImgRight from "@/app/template/components/product-img-right";
import SolidIcon from "@/app/template/components/solid-icon";
import MiddleSolid from "@/app/template/components/middle-solid";
import MiddleBgImg from "@/app/template/components/middle-bg-img";
import CenterImgSolid from "@/app/template/components/center-img-solid";
import AppOg from "@/app/template/components/app-og";
import NewsOg from "@/app/template/components/news-og";
import BlogOg from "@/app/template/components/blog-og";
import EventOg from "@/app/template/components/event-og";

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

    // Get common parameters
    const title = searchParams.get("title") || undefined;
    const subtitle = searchParams.get("subtitle") || undefined;
    const backgroundColor = searchParams.get("backgroundColor") || undefined;
    const imageUrl = searchParams.get("imageUrl") || undefined;
    // const logoUrl = searchParams.get("logoUrl") || undefined;
    const description = searchParams.get("description") || undefined;
    const backgroundImage = searchParams.get("backgroundImage") || undefined;
    const author = searchParams.get("author") || undefined;
    const website = searchParams.get("website") || undefined;

    let component;
    switch (templateId) {
      case "standard-title":
        component = <StandardTitle title={title} subtitle={subtitle} />;
        break;
      case "product-img-right":
        component = (
          <ProductImgRight
            title={title}
            description={description}
            imageUrl={imageUrl}
          />
        );
        break;
      case "icon-og":
        component = (
          <SolidIcon title={title} backgroundColor={backgroundColor} />
        );
        break;
      case "middle-solid":
        component = (
          <MiddleSolid
            title={title}
            subtitle={subtitle}
            backgroundColor={backgroundColor}
          />
        );
        break;
      case "middle-bg-img":
        component = (
          <MiddleBgImg title={title} backgroundImage={backgroundImage} />
        );
        break;
      case "app-og":
        component = (
          <AppOg
            title={title}
            subtitle={subtitle}
            backgroundImage={backgroundImage}
          />
        );
        break;
      case "center-img-solid":
        component = (
          <CenterImgSolid
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
          />
        );
        break;
      default:
        component = <StandardTitle title={title} subtitle={subtitle} />;
    }

    return new ImageResponse(component, {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist",
          data: await loadGoogleFont("Geist+Mono", "Geist Mono"),
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
