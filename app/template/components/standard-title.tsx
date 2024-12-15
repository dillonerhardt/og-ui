export default function StandardTitle({
  title = "Flighty",
  subtitle = "Track your flights in real-time",
  backgroundImage = "https://og-ui.erh.im/images/blue-right-hex.png",
  appImage = "https://og-ui.erh.im/images/iphone-mockup.png",
}: {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  appImage?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        color: "white",
        padding: "80px",
        backgroundImage: `
          radial-gradient(circle at 70% 50%, rgba(76, 29, 149, 0.3) 0%, transparent 70%),
          url(${backgroundImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "50%",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "700",
              fontFamily: "Inter",
            }}
          >
            {title}
          </h1>
        </div>
        <p
          style={{
            fontSize: "32px",
            color: "#9CA3AF",
            lineHeight: 1.4,
            fontFamily: "Inter",
            maxWidth: "480px",
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* Right content - iPhone mockup */}
      <div
        style={{
          position: "absolute",
          right: "-5%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "50%",
          height: "110%",
        }}
      >
        <img
          src={appImage}
          alt="iPhone Mockup"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 0 20px rgba(0, 0, 0, 0.5))",
          }}
        />
      </div>
    </div>
  );
}
