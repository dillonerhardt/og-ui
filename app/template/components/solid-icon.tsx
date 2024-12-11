export default function SolidIcon({
  title = "Feature Announcement",
  backgroundColor = "#000000",
}: {
  title?: string;
  backgroundColor?: string;
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
        color: "white",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          fontWeight: "bold",
          textAlign: "center",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          maxWidth: "900px",
        }}
      >
        {title}
      </h1>
    </div>
  );
}
