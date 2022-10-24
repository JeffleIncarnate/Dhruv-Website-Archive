import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar(props) {
  let navigate = useNavigate();

  return (
    <nav className="nav_bar">
      <div className="navbar_left">
        <Link to="/">
          <img src={props.img} alt={props.alt} />
        </Link>
      </div>

      <ul className="navbar_right">
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="#aboutme">About</Link>
        </li>
        <button
          type="button"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
