import styled from "styled-components";
import { useAppContext } from "../context/useAppContext";
import type { ImageItem } from "../types";

type Props = {
  image: ImageItem;
};

const CardItem = ({ image }: Props) => {
  const { toggleSaveImage, isImageSaved } = useAppContext();

  const saved = isImageSaved(image.id);

  return (
    <Card>
      <Header>
        <span>{image.author}</span>

        <input
          type="checkbox"
          checked={saved}
          onChange={() => toggleSaveImage(image)}
        />
      </Header>

      <Line />

      <StyledImage
        src={image.download_url}
        alt="img"
      />
    </Card>
  );
};

export default CardItem;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 0;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  font-weight: 600;
`;

const Line = styled.div`
  border-bottom: 1px solid #ccc;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;