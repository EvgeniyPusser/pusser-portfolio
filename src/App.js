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

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
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
