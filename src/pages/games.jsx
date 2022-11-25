// Import spicy css base class
import "../App.css";

// Components
import SplashChild from "../components/Splash/SplashChild";
import MainGames from "../components/Main-Games/Main_Games";
import Footer from "../components/Footer/Footer";

// React
import { useEffect } from "react";

function Games() {
  useEffect(() => {
    document.title = "Dhruv Rayat | Games";
  });

  return (
    <>
      <SplashChild PageName="Games" LinkTo="Home / Games >" />
      <MainGames />
      <Footer />
    </>
  );
}

export default Games;
