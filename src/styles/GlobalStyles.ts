import { createGlobalStyle, styled } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  body {
    background: #ffffff;
    color: #111827;
  }

  a {
    text-decoration: none;
  }

  .mobile-header {
    display: none;
  }

  .desktop-menu {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 768px) {
    .mobile-header {
      display: block;
      position: fixed;
      left: 16px;
      top: 16px;
      z-index: 1001;
    }

    .desktop-menu {
      display: none !important;
    }
  }
`;

export default GlobalStyles;

export const TopBar = styled.div`
  width: 100%;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: center;
  padding: 60px 16px 24px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavList = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
`;

export const NavButton = styled.button<{ $active: boolean }>`
  min-width: 120px;
  padding: 14px 24px;
  border: 1px solid #d1d5db;
  border-radius: 14px;
  background: ${({ $active }) => ($active ? "#2563eb" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#111827")};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export const PageWrapper = styled.div``;

export const ContentArea = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
`;

export const MainContent = styled.div`
  text-align: center;
`;

export const HomeTitle = styled.h1`
  text-align: center;
  font-size: 64px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const NameInput = styled.input`
  width: 440px;
  padding: 18px;
  border-radius: 14px;
  border: 1px solid #d1d5db;
  font-size: 18px;
`;

export const PrimaryButton = styled.button`
  padding: 18px 28px;
  border-radius: 14px;
  background: #2563eb;
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;

export const SectionSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const EmptyText = styled.p`
  margin-top: 20px;
`;

export const SavedHeader = styled.h2`
  margin-bottom: 20px;
`;

export const PaginationWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const PageButton = styled.button<{ $active: boolean }>`
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: ${({ $active }) => ($active ? "#2563eb" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#000")};
  cursor: pointer;
`;