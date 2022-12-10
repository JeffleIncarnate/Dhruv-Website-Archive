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

// React
import { Route, Routes, useLocation } from "react-router-dom";

// Exit animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
