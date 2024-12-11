export default function MiddleSolid({
  title = "Geist Mono",
  backgroundColor = "#000000",
}: {
  title?: string;
  subtitle?: string;
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
        padding: "60px",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          fontWeight: "bold",
          textAlign: "center",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          fontFamily: "Geist",
        }}
      >
        {title}
      </h1>
    </div>
  );
}
