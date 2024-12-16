export default function EventOg({
  title,
  backgroundImage,
  date,
  location,
  logoImage,
  textColor = "#ffffff",
  backgroundColor = "#000000",
}: {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  date?: string;
  location?: string;
  logoImage?: string;
  textColor?: string;
  backgroundColor?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: backgroundColor,
        color: textColor,
        position: "relative",
      }}
    >
      {/* Background Image */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Background"
          //   height={1000}
          //   width={1000}
          style={{
            position: "absolute",
            // top: 0,
            // left: 0,
            // width: "100%",
            // height: "100%",
            objectFit: "contain",
            objectPosition: "center",
            // zIndex: 0,
          }}
        />
      )}

      {/* Content Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
          height: "100%",
          padding: "32px",
        }}
      >
        {/* Top Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "auto",
          }}
        >
          {/* Logo */}
          <img
            src={logoImage}
            alt="Logo"
            style={{
              height: "32px",
              //   width: "auto",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              fontSize: "18px",
              fontFamily: "Geist",
              opacity: 0.8,
            }}
          >
            <span>{location}</span>
            <span>{date}</span>
          </div>
        </div>

        {/* Center Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            flex: 1,
            gap: "16px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "400",
              fontFamily: "Geist",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
              lineHeight: 1,
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
