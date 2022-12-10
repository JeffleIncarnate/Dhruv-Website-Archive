// Import spicy css base class
import "../App.css";

// Components
import SplashChild from "../components/Splash/SplashChild";
import MainAbout from "../components/Main-About/Main_About";
import Footer from "../components/Footer/Footer";
import LightToDark from "../components/Light-To-Dark/Light_To_Dark";
import AnimatedPage from "../components/Animations/AnimatedPage";

// React
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "Dhruv Rayat | About Me";
  });

  return (
    <>
      <AnimatedPage>
        <LightToDark />
        <SplashChild PageName="About" LinkTo="Home / About >" />
        <MainAbout />
        <Footer />
      </AnimatedPage>
    </>
  );
}

export default About;
