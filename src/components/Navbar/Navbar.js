import "./Navbar.css";

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
          <a href="/games">Games</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/timeline">Timeline</a>
        </li>
        <li>
          <a href="#quotes">Quotes</a>
        </li>
        <button type="button">Contact</button>
      </ul>
    </nav>
  );
}

export default Navbar;
