export default function BlogOg({
  title,
  date,
  views,
  author,
  website,
}: {
  title?: string;
  date?: string;
  views?: string;
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
          marginBottom: "40px",
        }}
      >
        <span style={{ fontSize: 32, fontFamily: "Inter" }}>{author}</span>
        <span style={{ fontSize: 32, fontFamily: "Inter" }}>{website}</span>
      </div>

      {/* Title */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontFamily: "Inter",
            fontWeight: 700,
            textAlign: "center",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>
      </div>

      {/* Footer with date and views */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          color: "#666",
          fontSize: 24,
          fontFamily: "Inter",
        }}
      >
        {date && <span>{date}</span>}
        {views && <span>— {views} views</span>}
      </div>
    </div>
  );
}
