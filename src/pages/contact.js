// Import spicy css base class
import "../App.css";

// Components
import Navbar from "../components/Navbar/Navbar";
import SplashChild from "../components/Splash/SplashChild";
import MainContact from "../components/Main-Contact/Main_Contact";
import Footer from "../components/Footer/Footer";

// Images
import Logo_light_NoText from "../images/Logo_Light.png";

// React
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Dhruv Rayat | Contact";
  });

  return (
    <>
      <Navbar img={Logo_light_NoText} alt="Dhruv-Rayat's Logo" />
      <SplashChild PageName="Contact" LinkTo="Home / Contact >" />
      <MainContact />
      <Footer />
    </>
  );
}

export default Contact;
