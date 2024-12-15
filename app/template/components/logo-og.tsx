export default function LogoOg({
  imageUrl,
  backgroundColor,
}: {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
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
        gap: "32px",
      }}
    >
      <img src={imageUrl} alt="Center Image" height={239} width={273} />
    </div>
  );
}
