// Spicy base css
import "../App.css";

// Components
import Navbar from "../components/Navbar/Navbar";
import SplashChild from "../components/Splash/SplashChild";
import MainProjects from "../components/Main-Projects/Main_Projects";
import Footer from "../components/Footer/Footer";

// React
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Dhruv Rayat | Projects";
  });

  return (
    <>
      <SplashChild PageName="Projects" LinkTo="Home / Projects >" />
      <MainProjects />
      <Footer />
    </>
  );
}

export default Home;
