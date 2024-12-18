export function ProfileOG({
  title,
  subtitle,
  description,
  imageUrl,
  backgroundColor = "#18181B",
  website,
}: {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  backgroundColor?: string;
  website?: string;
}) {
  return (
    <div
      style={{
        background: backgroundColor,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        padding: "60px",
        gap: "60px",
      }}
    >
      {/* Profile Image */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={imageUrl}
          alt="Profile"
          width={300}
          height={300}
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid rgba(255,255,255,0.1)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <h1
          style={{
            fontSize: 72,
            fontWeight: "bold",
            color: "white",
            lineHeight: 1,
            margin: 0,
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: 36,
            color: "#a1a1aa",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {subtitle}
        </p>

        <p
          style={{
            fontSize: 32,
            color: "#71717a",
            margin: 0,
            lineHeight: 1.4,
            maxWidth: "600px",
          }}
        >
          {description}
        </p>

        {/* Social Links/Stats Container */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "12px",
          }}
        >
          {/* Stats Pill */}
          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "12px 24px",
              borderRadius: "100px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ color: "#ffffff", fontSize: "24px" }}>
              {website}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
