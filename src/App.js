// Spicy base css
import "./App.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import Splash from "./components/Splash/Splash";

// Images
import Logo_light_NoText from "./images/Logo_Light.png";
import Me from "./images/Me.jpg";

function App() {
  return (
    <>
      <Navbar img={Logo_light_NoText} alt="Dhruv-Rayat's Logo" />
      <Splash img={Me} alt="MEs" />
    </>
  );
}

export default App;
