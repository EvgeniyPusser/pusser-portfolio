import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import BlockchainHousing from "./pages/BlockchainHousing";
import DeveloperProjects from "./pages/DeveloperProjects";
import ReconstructionLaw from "./pages/ReconstructionLaw";
import Research from "./pages/Research";
import About from "./pages/About";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./portfolio.css";

function PagePosition() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const names = { "/": "Research & Project Origination", "/work": "Current Projects", "/research": "Research Papers", "/about": "Background & Contribution" };
    document.title = `Evgenii Bogomazov-Pusser — ${names[pathname] || "Track Record"}`;
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <PagePosition />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/research" element={<Research />} />
        <Route path="/about" element={<About />} />
        <Route path="/reconstruction" element={<ReconstructionLaw />} />
        <Route path="/blockchain" element={<BlockchainHousing />} />
        <Route path="/developer" element={<DeveloperProjects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
