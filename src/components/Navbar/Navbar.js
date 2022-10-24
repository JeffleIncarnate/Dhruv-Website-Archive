import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="nav_bar">
      <div className="navbar_left">
        <a href="/">
          <img src={props.img} alt={props.alt} />
        </a>
      </div>

      <ul className="navbar_right">
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="#aboutme">About Me</Link>
        </li>
        <button type="button">Contact</button>
      </ul>
    </nav>
  );
}

export default Navbar;
