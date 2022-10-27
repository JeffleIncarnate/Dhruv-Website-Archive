// Spicy base css
import "./App.css";

// Pages
import Home from "./pages/home";
import Games from "./pages/games";
import Projects from "./pages/projects";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/404_Page_Not_Found";

import Navbar from "./components/Navbar/Navbar";

// Images
import Logo_light_NoText from "./images/Logo_Light.png";

// Pallete
// import CommandPallete from "./components/Command-Pallete/CommandPallete";
import Light_To_Dark from "./components/Light-To-Dark/Light_To_Dark";

// React
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Light_To_Dark />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/games" element={<Games/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </>
    );
}

export default App;
