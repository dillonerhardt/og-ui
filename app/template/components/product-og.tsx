export default function ProductOg({
  title,
  description,
  imageUrl,
  backgroundImage,
  backgroundColor = "#000000",
  logoImage,
}: {
  title?: string;
  description?: string;
  imageUrl?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  logoImage?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: backgroundColor,
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
          padding: "48px",
        }}
      >
        {/* Logo */}
        {logoImage && (
          <div
            style={{
              display: "flex",
              marginBottom: "24px",
            }}
          >
            <img
              src={logoImage}
              alt="Logo"
              style={{
                height: "40px",
              }}
            />
          </div>
        )}

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
                fontSize: "56px",
                fontWeight: "400",
                lineHeight: 1.1,
                margin: 0,
                // fontFamily: "Geist",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "32px",
                color: "#666666",
                margin: 0,
                // fontFamily: "Geist",
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
                marginBottom: "-20px",
                marginRight: "20px",
              }}
            >
              <img
                src={imageUrl}
                alt={title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "90vh",
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
