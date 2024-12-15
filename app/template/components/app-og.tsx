export default function AppOg({
  title = "Dynamic images",
  subtitle,
  backgroundImage = "https://og-ui.erh.im/images/green-hex.png",
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
      {/* Title content - positioned at bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: "50px",
          left: "80px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          zIndex: 2,
        }}
      >
        <svg
          data-v-f6279e27=""
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style={{ marginRight: "14px" }}
        >
          <path d="M7 2h10"></path>
          <path d="M5 6h14"></path>
          <rect width="18" height="12" x="3" y="10" rx="2"></rect>
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
        {subtitle && (
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
        )}
      </div>

      {/* iPhone mockup - positioned at right, emerging from bottom */}
      <div
        style={{
          position: "absolute",
          right: "34%",
          // bottom: "-10%",
          width: "65%",
          height: "140%",
          display: "flex",
          // justifyContent: "flex-end",
          // alignItems: "flex-end",
          zIndex: 1,
        }}
      >
        <img
          src={appImage}
          alt="iPhone Mockup"
          width={1400}
          height={1400}
          style={{
            // width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 0 20px rgba(0, 0, 0, 0.5))",
            transform: "rotate(-5deg)",
          }}
        />
      </div>
    </div>
  );
}
