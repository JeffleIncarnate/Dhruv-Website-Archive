import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  let navigate = useNavigate();
  return (
    <footer>
      <h3
        onClick={() => {
          navigate("/");
        }}
      >
        Dhruv Rayat™️
      </h3>
      <div className="footer_links">
        <Link
          onClick={() => {
            window.scrollBy(0, -100000);
          }}
          to="/games"
        >
          Games
        </Link>
        <Link
          onClick={() => {
            window.scrollBy(0, -100000);
          }}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          onClick={() => {
            window.scrollBy(0, -100000);
          }}
          to="/about"
        >
          About
        </Link>
        <button
          type="button"
          onClick={() => {
            navigate("/contact");
            window.scrollBy(0, -100000);
          }}
        >
          Contact
        </button>
      </div>
      <div className="footer_spicy_links">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/dhruv_rayat/"
        >
          <FaInstagram />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/RayatDhruv"
        >
          <FaTwitter />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/Dhruv-Rayat1"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
