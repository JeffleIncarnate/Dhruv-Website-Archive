// Import spicy css base class
import "../App.css";

// Components
import SplashChild from "../components/Splash/SplashChild";
import MainGames from "../components/Main-Games/Main_Games";
import Footer from "../components/Footer/Footer";
import LightToDark from "../components/Light-To-Dark/Light_To_Dark";

// React
import { useEffect } from "react";

// Animate
import AnimatedPage from "../components/Animations/AnimatedPage";

function Games() {
  useEffect(() => {
    document.title = "Dhruv Rayat | Games";
  });

  return (
    <>
      <AnimatedPage>
        <LightToDark />
        <SplashChild PageName="Games" LinkTo="Home / Games >" />
        <MainGames />
        <Footer />
      </AnimatedPage>
    </>
  );
}

export default Games;
