// Import spicy css base class
import "../App.css";

// Components
import SplashChild from "../components/Splash/SplashChild";
import MainContact from "../components/Main-Contact/Main_Contact";
import Footer from "../components/Footer/Footer";

// React
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Dhruv Rayat | Contact";
  });

  return (
    <>
      <SplashChild PageName="Contact" LinkTo="Home / Contact >" />
      <MainContact />
      <Footer />
    </>
  );
}

export default Contact;
