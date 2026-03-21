import { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import Pagination from "../components/Pagination";
import { useAppContext } from "../context/useAppContext";
import type { ImageItem } from "../types";
import {
  PageWrapper,
  ContentArea,
  MainContent,
  SectionTitle,
  SectionSubtitle,
  CardsGrid,
  EmptyText,
} from "../styles/GlobalStyles";

const ITEMS_PER_PAGE = 4;
const TOTAL_PAGES = 4;

const Details = () => {
  const { username } = useAppContext();
  const [images, setImages] = useState<ImageItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=16")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentImages = images.slice(start, start + ITEMS_PER_PAGE);

  return (
    <PageWrapper>
      <ContentArea>
        <MainContent>
          <SectionTitle>Welcome {username || "User"}</SectionTitle>

          <SectionSubtitle>
            Select images using checkbox and save them.
          </SectionSubtitle>

          {currentImages.length > 0 ? (
            <>
              <CardsGrid>
                {currentImages.map((img) => (
                  <CardItem key={img.id} image={img} />
                ))}
              </CardsGrid>

              <Pagination
                currentPage={currentPage}
                totalPages={TOTAL_PAGES}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            <EmptyText>Loading...</EmptyText>
          )}
        </MainContent>
      </ContentArea>
    </PageWrapper>
  );
};

export default Details;