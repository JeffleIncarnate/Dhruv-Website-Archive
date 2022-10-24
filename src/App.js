// Spicy base css
import "./App.css";

// Pages
import Home from "./pages/home";
import Games from "./pages/games";
import Projects from "./pages/projects";

// Pallete
// import CommandPallete from "./components/Command-Pallete/CommandPallete";

// React
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/timeline" element={<h1>Timeline</h1>} />
      </Routes>
    </>
  );
}

export default App;
