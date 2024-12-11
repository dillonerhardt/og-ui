export default function LogoBrBgImg({
  title = "Your Title Here",
  subtitle = "Your subtitle goes here",
  backgroundImage = "https://example.com/background.jpg",
  logoUrl = "https://example.com/logo.png",
}: {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  logoUrl?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "60px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          maxWidth: "800px",
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
            opacity: 0.9,
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </p>
      </div>
      <div
        style={{
          alignSelf: "flex-end",
        }}
      >
        <img
          src={logoUrl}
          alt="Logo"
          style={{
            height: "40px",
            width: "auto",
          }}
        />
      </div>
    </div>
  );
}
