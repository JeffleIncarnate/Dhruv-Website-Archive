// Import spicy css base class
import "../App.css";

// Components
import SplashChild from "../components/Splash/SplashChild";
import MainContact from "../components/Main-Contact/Main_Contact";
import Footer from "../components/Footer/Footer";
import LightToDark from "../components/Light-To-Dark/Light_To_Dark";
import AnimatedPage from "../components/Animations/AnimatedPage";

// React
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Dhruv Rayat | Contact";
  });

  return (
    <>
      <AnimatedPage>
        <LightToDark />
        <SplashChild PageName="Contact" LinkTo="Home / Contact >" />
        <MainContact />
        <Footer />
      </AnimatedPage>
    </>
  );
}

export default Contact;
