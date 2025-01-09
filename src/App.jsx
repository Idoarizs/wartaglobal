import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import { HomePage, SearchPage } from "./pages";

// Components
import { Footer, NavigationBar } from "./components";

const App = () => {
  return (
    <Router>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/berita/pencarian" element={<SearchPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
