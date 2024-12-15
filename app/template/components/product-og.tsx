export default function ProductOg({
  title,
  description,
  imageUrl,
  backgroundImage,
}: {
  title?: string;
  description?: string;
  imageUrl?: string;
  backgroundImage?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        color: "white",
        position: "relative",
      }}
    >
      {/* Background Image */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
            opacity: 0.7,
          }}
        />
      )}

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "32px",
        }}
      >
        {/* Main Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: "48px",
          }}
        >
          {/* Text Content */}
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <h1
              style={{
                fontSize: "64px",
                fontWeight: "400",
                lineHeight: 1.1,
                margin: 0,
                fontFamily: "Geist",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "32px",
                color: "#666666",
                margin: 0,
                fontFamily: "Geist",
              }}
            >
              {description}
            </p>
          </div>

          {/* Product Image */}
          {imageUrl && (
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={imageUrl}
                alt={title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
