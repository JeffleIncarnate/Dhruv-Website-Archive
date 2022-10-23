// Import spicy css base class
import "../App.css";

// Components
import Navbar from "../components/Navbar/Navbar";

// Images
import Logo_light_NoText from "../images/Logo_Light.png";

// React
import { useEffect } from "react";

function Games() {
  useEffect(() => {
    document.title = "Dhruv Rayat | Games";
  });

  return (
    <>
      <Navbar img={Logo_light_NoText} alt="Dhruv-Rayat's Logo" />
    </>
  );
}

export default Games;
