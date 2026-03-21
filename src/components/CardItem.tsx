import { useAppContext } from "../context/useAppContext";
import type { ImageItem } from "../types";

type Props = {
  image: ImageItem;
};

const CardItem = ({ image }: Props) => {
  const { toggleSaveImage, isImageSaved } = useAppContext();

  const saved = isImageSaved(image.id);

  return (
    <div style={cardStyle}>
      
      <div style={header}>
        <span>{image.author}</span>

        <input
          type="checkbox"
          checked={saved}
          onChange={() => toggleSaveImage(image)}
        />
      </div>

      <div style={line}></div>

      <img
        src={image.download_url}
        alt="img"
        style={imageStyle}
      />

    </div>
  );
};

export default CardItem;

const cardStyle: React.CSSProperties = {
  border: "1px solid #ccc",
  borderRadius: "12px",
  padding: "0",
  overflow: "hidden",
};

const header: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 12px",
  fontWeight: 600,
};

const line: React.CSSProperties = {
  borderBottom: "1px solid #ccc",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
};