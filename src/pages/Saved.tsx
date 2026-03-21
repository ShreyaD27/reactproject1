import CardItem from "../components/CardItem";
import { useAppContext } from "../context/useAppContext";
import {
  PageWrapper,
  ContentArea,
  MainContent,
  SavedHeader,
  CardsGrid,
  EmptyText,
} from "../styles/GlobalStyles";

const Saved = () => {
  const { username, savedImages } = useAppContext();

  return (
    <PageWrapper>
      <ContentArea>
        <MainContent>
          <SavedHeader>
            Hey {username || "User"} you saved {savedImages.length} image(s)
          </SavedHeader>

          {savedImages.length > 0 ? (
            <CardsGrid>
              {savedImages.map((img) => (
                <CardItem key={img.id} image={img} />
              ))}
            </CardsGrid>
          ) : (
            <EmptyText>No saved images</EmptyText>
          )}
        </MainContent>
      </ContentArea>
    </PageWrapper>
  );
};

export default Saved;