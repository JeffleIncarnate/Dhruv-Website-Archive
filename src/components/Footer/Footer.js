import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h3>Dhruv Rayat™️</h3>
      <div className="footer_links">
        <Link to="/games">Games</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/aboutme">About</Link>
        <button type="button">Contact</button>
      </div>
      <div className="footer_spicy_links">
        <a href="https://www.google.com/">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/RayatDhruv">
          <FaTwitter />
        </a>
        <a href="https://www.google.com/">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
