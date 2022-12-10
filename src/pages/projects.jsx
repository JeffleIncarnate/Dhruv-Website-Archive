// Spicy base css
import "../App.css";

// Components
import SplashChild from "../components/Splash/SplashChild";
import MainProjects from "../components/Main-Projects/Main_Projects";
import Footer from "../components/Footer/Footer";
import LightToDark from "../components/Light-To-Dark/Light_To_Dark";
import AnimatedPage from "../components/Animations/AnimatedPage";

// React
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Dhruv Rayat | Projects";
  });

  return (
    <>
      <AnimatedPage>
        <LightToDark />
        <SplashChild PageName="Projects" LinkTo="Home / Projects >" />
        <MainProjects />
        <Footer />
      </AnimatedPage>
    </>
  );
}

export default Home;
