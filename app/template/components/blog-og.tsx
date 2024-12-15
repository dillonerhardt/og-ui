export default function BlogOg({
  title = "Dynamic OG Images",
  subtitle = "February 4, 2016 — 21,839 views",
  author = "Dillon",
  website = "og-ui.erh.im",
}: {
  title?: string;
  subtitle?: string;
  author?: string;
  website?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        padding: "60px",
      }}
    >
      {/* Header with author and website */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span style={{ fontSize: 32, fontFamily: "Inter" }}>{author}</span>
        <span
          style={{
            fontSize: 22,
            fontFamily: "Inter",
            fontWeight: 400,
            color: "#666",
          }}
        >
          {website}
        </span>
      </div>

      {/* Title and Subtitle Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          gap: "20px",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontFamily: "Inter",
            fontWeight: 700,
            textAlign: "center",
            maxWidth: "900px",
            backgroundColor: "#f4f4f4",
            padding: "20px 40px",
            borderRadius: "10px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 24,
            fontFamily: "Inter",
            color: "#666",
            fontWeight: 400,
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}
