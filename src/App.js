// Spicy base css
import "./App.css";

// Pages
import Home from "./pages/home";
import Games from "./pages/games";
import Projects from "./pages/projects";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/404_Page_Not_Found";

// Pallete
// import CommandPallete from "./components/Command-Pallete/CommandPallete";
import LightToDark from "./components/Light-To-Dark/Light_To_Dark";

// React
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <LightToDark />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
