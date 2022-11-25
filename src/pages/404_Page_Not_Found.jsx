// Import spicy css base class
import "../App.css";

// Components
import SplashChild from "../components/Splash/SplashChild";
import Footer from "../components/Footer/Footer";

// React
import { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    document.title = "Dhruv Rayat | Page not Found";
  });

  return (
    <>
      <SplashChild PageName="404 Not Found" LinkTo="Home / 404 Not Found" />
      <div className="page_not_found_main">
        Hmm, seems like that page you're looks for does not exist.
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
