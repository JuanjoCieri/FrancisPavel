import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./hook/scrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={"/*"} element={<HomePage />} />
          <Route path={"/"} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
