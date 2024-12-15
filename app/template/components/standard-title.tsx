export default function StandardTitle({
  title = "Generate great\nopen graph images\nfor your dynamic content.",
  subtitle = "https://og-ui.erh.im →",
  backgroundImage = "https://og-ui.erh.im/images/blue-right-hex.png",
  logoImage = "https://og-ui.erh.im/og-ui.svg",
}: {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  logoImage?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        color: "white",
        padding: "80px",
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          maxWidth: "65%",
        }}
      >
        <img
          src={logoImage}
          alt="Logo"
          height={40}
          style={{
            height: "40px",
          }}
        />

        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              lineHeight: 1.1,
              marginBottom: "24px",
              fontFamily: "Inter",
              whiteSpace: "pre-line",
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontSize: "24px",
              color: "#666666",
              fontFamily: "Inter",
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
