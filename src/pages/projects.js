// Spicy base css
import "../App.css";

// Components
import Navbar from "../components/Navbar/Navbar";
import SplashChild from "../components/Splash/SplashChild";
import MainProjects from "../components/Main-Projects/Main_Projects";
import Footer from "../components/Footer/Footer";

// Images
import Logo_light_NoText from "../images/Logo_Light.png";

// React
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Dhruv Rayat | Projects";
  });

  return (
    <>
      <Navbar img={Logo_light_NoText} alt="Dhruv-Rayat's Logo" />
      <SplashChild PageName="Projects" LinkTo="Home / Projects >" />
      <MainProjects />
      <Footer />
    </>
  );
}

export default Home;
