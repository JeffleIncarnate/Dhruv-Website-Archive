// Import spicy css base class
import "../App.css";

// Components
import SplashChild from "../components/Splash/SplashChild";
import MainAbout from "../components/Main-About/Main_About";
import Footer from "../components/Footer/Footer";

// React
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "Dhruv Rayat | About Me";
  });

  return (
    <>
      <SplashChild PageName="About" LinkTo="Home / About >" />
      <MainAbout />
      <Footer />
    </>
  );
}

export default About;
