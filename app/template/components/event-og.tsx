export default function EventOg({
  title,
  backgroundImage,
  date,
  location,
  logoImage,
}: {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  date?: string;
  location?: string;
  logoImage?: string;
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
        padding: "32px",
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "auto",
        }}
      >
        {/* Logo */}
        <img
          src={logoImage}
          alt="Logo"
          style={{
            height: "32px",
            width: "auto",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            fontSize: "14px",
            fontFamily: "Geist",
            opacity: 0.8,
          }}
        >
          <span>{location}</span>
          <span>{date}</span>
        </div>
      </div>

      {/* Center Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          flex: 1,
          gap: "16px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "400",
            fontFamily: "Geist",
            // letterSpacing: "0.2em",
            // background: "linear-gradient(to bottom, #FFFFFF 30%, #666666)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0,
            lineHeight: 1,
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
