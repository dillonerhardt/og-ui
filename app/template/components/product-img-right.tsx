export default function ProductImgRight({
  title = "Product Name",
  description = "Product description or tagline goes here",
  imageUrl = "https://example.com/product-image.jpg",
}: {
  title?: string;
  description?: string;
  imageUrl?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          gap: "24px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "32px",
            color: "#666666",
          }}
        >
          {description}
        </p>
      </div>
      <div
        style={{
          flex: "1",
          position: "relative",
        }}
      >
        {/* Next.js Image component doesn't work in OG Images, so we use img */}
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
