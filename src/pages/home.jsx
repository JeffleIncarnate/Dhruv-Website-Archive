// Spicy base css
import "../App.css";

// Components
import Splash from "../components/Splash/Splash";
import MainHome from "../components/Main-Home/Main_Home";
import Footer from "../components/Footer/Footer";
import LightToDark from "../components/Light-To-Dark/Light_To_Dark";
import AnimatedPage from "../components/Animations/AnimatedPage";

// Images
import Me from "../images/Me.jpg";

// React
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Dhruv Rayat | Home";
  });

  return (
    <>
      <AnimatedPage>
        <LightToDark />
        <Splash img={Me} alt="MEs" />
        <MainHome />
        <Footer />
      </AnimatedPage>
    </>
  );
}

export default Home;
