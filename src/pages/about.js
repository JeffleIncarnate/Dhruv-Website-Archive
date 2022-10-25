// Import spicy css base class
import "../App.css";

// Components
import Navbar from "../components/Navbar/Navbar";
import SplashChild from "../components/Splash/SplashChild";
import MainAbout from "../components/Main-About/Main_About";
import Footer from "../components/Footer/Footer";

// Images
import Logo_light_NoText from "../images/Logo_Light.png";

// React
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "Dhruv Rayat | About Me";
  });

  return (
    <>
      <Navbar img={Logo_light_NoText} alt="Dhruv-Rayat's Logo" />
      <SplashChild PageName="About" LinkTo="Home / About >" />
      <MainAbout />
      <Footer />
    </>
  );
}

export default About;
