export default function NewsOg({
  title,
  backgroundImage = "https://og-ui.erh.im/images/theo.jpeg",
}: {
  title?: string;
  backgroundImage?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Image */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      )}

      {/* Dark Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50%",
          background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 60,
          right: 60,
          color: "white",
          fontSize: 64,
          fontFamily: "Inter",
          fontWeight: 700,
          lineHeight: 1.1,
        }}
      >
        {title}
      </div>
    </div>
  );
}
