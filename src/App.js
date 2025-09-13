import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Support from "./pages/Support";
import BlockchainHousing from "./pages/BlockchainHousing";
import DeveloperProjects from "./pages/DeveloperProjects";
import ReconstructionLaw from "./pages/ReconstructionLaw";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/support" element={<Support />} />
        <Route path="/blockchain" element={<BlockchainHousing />} />
        <Route path="/developer" element={<DeveloperProjects />} />
        <Route path="/reconstruction" element={<ReconstructionLaw />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
