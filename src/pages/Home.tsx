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

  const handleNext = () => {
    if (username.trim() === "") return;
    navigate("/details");
  };

  return (
    <PageWrapper>
      <ContentArea>
        <MainContent>
          <HomeTitle>Home Page</HomeTitle>

          <InputRow>
            <NameInput
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <PrimaryButton
              onClick={handleNext}
              disabled={username.trim() === ""}
              style={{
                opacity: username.trim() === "" ? 0.5 : 1,
                cursor: username.trim() === "" ? "not-allowed" : "pointer",
              }}
            >
              Next
            </PrimaryButton>
          </InputRow>
        </MainContent>
      </ContentArea>
    </PageWrapper>
  );
};

export default Home;