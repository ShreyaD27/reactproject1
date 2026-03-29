import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { TopBar } from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Saved from "./pages/Saved";

function App() {
  return (
    <BrowserRouter>
      <TopBar>
        <Navbar />
      </TopBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;