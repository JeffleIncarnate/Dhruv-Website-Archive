import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar(props) {
  let navigate = useNavigate();

  // eslint-disable-next-line
  const [smallDiv, setSmallDiv] = useState(null);
  const [dataSmallDiv, setDataSmallDiv] = useState("navbar_lines_disaper");

  const [dataTopToBottomMov, setDataTopToBottomMov] =
    useState("navbar_lines_x1");
  const [dataBottomToTopMov, setDataBottomToTopMov] =
    useState("navbar_lines_x2");
  const [closeDiv, setCloseDiv] = useState(false);
  const [dataMobileNav, setDataMobileNav] = useState("mobile_nav");

  const [clickActive, setClickActive] = useState(true);

  return (
    <nav className="nav_bar">
      <div className="navbar_left">
        <Link to="/">
          {props.isDarkImg ? (
            <img src={props.img} alt={props.alt} />
          ) : (
            <img
              className="navbar_dark_image"
              src={props.img}
              alt={props.alt}
            />
          )}
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
          <Link to="/about">About</Link>
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

      <div
        className="navbar_lines"
        onClick={() => {
          if (clickActive) {
            setClickActive(false);
            if (closeDiv) {
              setTimeout(() => {
                setDataSmallDiv("rev_shorten_div_finish");
                setDataTopToBottomMov("rev_top_to_bottom_finish");
                setDataBottomToTopMov("rev_bottom_to_top_finish");
                setDataMobileNav("rev_mobile_nav");
              }, "490");
              setDataMobileNav("rev_mobile_nav rev_mobile_nav_class_anim");
              setDataSmallDiv("rev_shorten_div");
              setDataTopToBottomMov("rev_top_to_bottom");
              setDataBottomToTopMov("rev_bottom_to_top");
              setCloseDiv(false);
            } else {
              setSmallDiv(true);
              setTimeout(() => {
                setDataSmallDiv("shorten_div_finish");
                setDataTopToBottomMov("top_to_bottom_finish");
                setDataBottomToTopMov("bottom_to_top_finish");
                setDataMobileNav("mobile_nav_finish");
              }, "490");
              setDataMobileNav("mobile_nav mobile_nav_class_anim");
              setDataSmallDiv("shorten_div");
              setDataTopToBottomMov("top_to_bottom");
              setDataBottomToTopMov("bottom_to_top");
              setCloseDiv(true);
            }

            setTimeout(() => {
              setClickActive(true);
            }, "490");
          }
        }}
      >
        <div className={dataTopToBottomMov}></div>
        <div className={dataSmallDiv}></div>
        <div className={dataBottomToTopMov}></div>
      </div>

      <div className={dataMobileNav}>
        <ul>
          <li>
            <Link
              onClick={() => {
                setTimeout(() => {
                  setDataSmallDiv("rev_shorten_div_finish");
                  setDataTopToBottomMov("rev_top_to_bottom_finish");
                  setDataBottomToTopMov("rev_bottom_to_top_finish");
                  setDataMobileNav("rev_mobile_nav");
                }, "490");
                setDataMobileNav("rev_mobile_nav rev_mobile_nav_class_anim");
                setDataSmallDiv("rev_shorten_div");
                setDataTopToBottomMov("rev_top_to_bottom");
                setDataBottomToTopMov("rev_bottom_to_top");
                setCloseDiv(false);
              }}
              to="/games"
            >
              Games
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setTimeout(() => {
                  setDataSmallDiv("rev_shorten_div_finish");
                  setDataTopToBottomMov("rev_top_to_bottom_finish");
                  setDataBottomToTopMov("rev_bottom_to_top_finish");
                  setDataMobileNav("rev_mobile_nav");
                }, "490");
                setDataMobileNav("rev_mobile_nav rev_mobile_nav_class_anim");
                setDataSmallDiv("rev_shorten_div");
                setDataTopToBottomMov("rev_top_to_bottom");
                setDataBottomToTopMov("rev_bottom_to_top");
                setCloseDiv(false);
              }}
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setTimeout(() => {
                  setDataSmallDiv("rev_shorten_div_finish");
                  setDataTopToBottomMov("rev_top_to_bottom_finish");
                  setDataBottomToTopMov("rev_bottom_to_top_finish");
                  setDataMobileNav("rev_mobile_nav");
                }, "490");
                setDataMobileNav("rev_mobile_nav rev_mobile_nav_class_anim");
                setDataSmallDiv("rev_shorten_div");
                setDataTopToBottomMov("rev_top_to_bottom");
                setDataBottomToTopMov("rev_bottom_to_top");
                setCloseDiv(false);
              }}
              to="/about"
            >
              About
            </Link>
          </li>
          <button
            type="button"
            onClick={() => {
              navigate("/contact");
              setTimeout(() => {
                setDataSmallDiv("rev_shorten_div_finish");
                setDataTopToBottomMov("rev_top_to_bottom_finish");
                setDataBottomToTopMov("rev_bottom_to_top_finish");
                setDataMobileNav("rev_mobile_nav");
              }, "490");
              setDataMobileNav("rev_mobile_nav rev_mobile_nav_class_anim");
              setDataSmallDiv("rev_shorten_div");
              setDataTopToBottomMov("rev_top_to_bottom");
              setDataBottomToTopMov("rev_bottom_to_top");
              setCloseDiv(false);
            }}
          >
            Contact
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
