import "./SplashChild.css";
import { Link } from "react-router-dom";

function SplashChild(props) {
  return (
    <header className="splash_child">
      <h1>{props.PageName}</h1>
      <p>
        <Link
          to="/"
          onClick={() => {
            window.scrollBy(0, -100000);
          }}
          className="link_home"
        >
          {props.LinkTo}
        </Link>
      </p>
    </header>
  );
}

export default SplashChild;
