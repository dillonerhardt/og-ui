export default function MiddleBgImg({
  title = "Enjoy Open Graph.",
  backgroundImage = "/images/honeycomb-bg.png",
  logoImage = "",
}: {
  title?: string;
  backgroundImage?: string;
  logoImage?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src={backgroundImage}
        alt="Background"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        {logoImage && (
          <img
            src={logoImage}
            alt="Logo"
            style={{
              width: "200px",
              marginBottom: "2rem",
            }}
          />
        )}
        <h1
          style={{
            fontSize: "6rem",
            fontWeight: "700",
            marginBottom: "1rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            maxWidth: "700px",
            fontFamily: "Inter",
            lineHeight: "1.1",
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
