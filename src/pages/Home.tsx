import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/useAppContext";
import {
  PageWrapper,
  ContentArea,
  MainContent,
  HomeTitle,
  InputRow,
  NameInput,
  PrimaryButton,
} from "../styles/GlobalStyles";

const Home = () => {
  const navigate = useNavigate();
  const { username, setUsername } = useAppContext();

  return (
    <PageWrapper>
      <ContentArea>
        <MainContent>
          <HomeTitle>Home Page</HomeTitle>

          <InputRow>
            <NameInput
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name"
            />
            <PrimaryButton onClick={() => navigate("/details")}>
              Next
            </PrimaryButton>
          </InputRow>
        </MainContent>
      </ContentArea>
    </PageWrapper>
  );
};

export default Home;