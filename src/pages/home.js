// Spicy base css
import "../App.css";

// Components
import Navbar from "../components/Navbar/Navbar";
import Splash from "../components/Splash/Splash";
import MainHome from "../components/Main-Home/Main_Home";

// Images
import Logo_light_NoText from "../images/Logo_Light.png";
import Me from "../images/Me.jpg";

// React
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Dhruv Rayat | Home";
  });

  return (
    <>
      <Navbar img={Logo_light_NoText} alt="Dhruv-Rayat's Logo" />
      <Splash img={Me} alt="MEs" />
      <MainHome />
    </>
  );
}

export default Home;
