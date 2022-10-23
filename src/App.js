// Spicy base css
import "./App.css";

// Pages
import Home from "./pages/home";
import Games from "./pages/games";

// React
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/timeline" element={<h1>Timeline</h1>} />
      </Routes>
    </>
  );
}

export default App;
