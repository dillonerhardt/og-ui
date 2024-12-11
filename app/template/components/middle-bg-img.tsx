export default function MiddleBgImg({
  title = "Ocean Fresh Fish",
  backgroundImage = "https://images.unsplash.com/photo-1510018572596-e40e2619b412?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  logoImage = "",
}: {
  title?: string;
  backgroundImage?: string;
  logoImage?: string;
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
        overflow: "hidden",
      }}
    >
      <img
        src={backgroundImage}
        alt="Background"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        {logoImage && (
          <img
            src={logoImage}
            alt="Logo"
            style={{
              width: "200px",
              marginBottom: "2rem",
            }}
          />
        )}
        <h1
          style={{
            fontSize: "6rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            maxWidth: "700px",
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
