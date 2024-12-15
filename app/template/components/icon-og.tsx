export default function IconOg({
  title,
  backgroundColor,
  textColor,
}: {
  title?: string;
  backgroundColor?: string;
  textColor?: string;
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
        backgroundColor,
        color: textColor,
        padding: "40px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <svg
          data-v-f6279e27=""
          xmlns="http://www.w3.org/2000/svg"
          width="130"
          height="130"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style={{ marginRight: "20px", marginTop: "-20px" }}
        >
          <path d="M7 2h10"></path>
          <path d="M5 6h14"></path>
          <rect width="18" height="12" x="3" y="10" rx="2"></rect>
        </svg>
        <h1
          style={{
            fontSize: "96px",
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            maxWidth: "900px",
            fontFamily: "Inter",
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
