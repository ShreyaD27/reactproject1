import { PaginationWrapper, PageButton } from "../styles/GlobalStyles";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <PaginationWrapper>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <PageButton
          key={page}
          $active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;