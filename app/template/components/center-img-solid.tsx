export default function CenterImgSolid({
  imageUrl = "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg",
  backgroundColor = "#dc0100",
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
