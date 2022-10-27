import { useState, useEffect } from "react";

import "./Main_Home.css";
import DhruvBanking from "../../images/projects/dhruv_banking.png";
import DhruvData from "../../images/projects/dhruv_data.png";
import HavenBot from "../../images/projects/haven_bot.png";
import EnviroClubWebite from "../../images/projects/eviro_club_website.png";

function MainHome(props) {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState(false);
  const [classname, setClassname] = useState("");

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setTimeout(() => {
          setIsActive(false);
        }, "500");
        setClassname("card_out");
        document.body.style.overflow = "scroll";
        document.body.style.overflowX = "hidden";
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <main>
      <div className="projects">
        <h2>Projects</h2>

        <div className="projects_wrapper">
          <div className="dhruv_banking projects_left">
            <h3>Dhruv Banking</h3>
            <button
              onClick={() => {
                setIsActive(true);
                setData([
                  "Dhruv Banking",
                  "This is the future of banking",
                  DhruvBanking,
                ]);
                setClassname("card_in");
                document.body.style.overflow = "hidden";
              }}
            >
              Learn More
            </button>
          </div>
          <div className="dhruv_data projects_right">
            <h3>Dhruv Data</h3>
            <button
              onClick={() => {
                setIsActive(true);
                setData([
                  "Dhruv Data",
                  "Welcome to the all new Database system",
                  DhruvData,
                ]);
                setClassname("card_in");
                document.body.style.overflow = "hidden";
              }}
            >
              Learn More
            </button>
          </div>
          <div className="haven_bot projects_left">
            <h3>Haven Bot</h3>
            <button
              onClick={() => {
                setIsActive(true);
                setData(["Haven Bot", "This is my discord bot :3", HavenBot]);
                setClassname("card_in");
                document.body.style.overflow = "hidden";
              }}
            >
              Learn More
            </button>
          </div>
          <div className="envio_club_website projects_right">
            <h3>Envro Club Website</h3>
            <button
              onClick={() => {
                setIsActive(true);
                setData([
                  "Enviro Club Website",
                  "A website I am working on for my school",
                  EnviroClubWebite,
                ]);
                setClassname("card_in");
                document.body.style.overflow = "hidden";
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        {isActive ? (
          <div className="projects_modal">
            <div className={`modal_inner ${classname}`}>
              <img src={data[2]} alt="Dhruv Banking" title="Dhruv Banking" />
              <div>
                <h3>{data[0]}</h3>
                <p>{data[1]}</p>
              </div>
              <button
                onClick={() => {
                  setTimeout(() => {
                    setIsActive(false);
                  }, "500");
                  setClassname("card_out");
                  document.body.style.overflow = "scroll";
                  document.body.style.overflowX = "hidden";
                }}
              >
                X
              </button>
            </div>
          </div>
        ) : null}
      </div>

      <div className="aboutme">
        <h2>About Me</h2>

        <div className="aboutme_left">
          <h3>Languages</h3>
          <br />
          <ul>
            <li>HTML</li>
            <div className="container">
              <div className="skills html">
                <p>90%</p>
              </div>
            </div>

            <li>CSS</li>
            <div className="container">
              <div className="skills css">
                <p>90%</p>
              </div>
            </div>

            <li>JavaScript</li>
            <div className="container">
              <div className="skills js">
                <p>80%</p>
              </div>
            </div>

            <li>C#</li>
            <div className="container">
              <div className="skills c-sharp">
                <p>80%</p>
              </div>
            </div>

            <li>Python</li>
            <div className="container">
              <div className="skills python">
                <p>60%</p>
              </div>
            </div>
          </ul>
        </div>

        <div className="aboutme_right">
          <h3>Technologies</h3>

          <ul>
            <li>
              <strong>React</strong> - Web Development
            </li>
            <li>
              <strong>Express</strong> - REST Api's
            </li>
            <li>
              <strong>Flask</strong> - Web Development
            </li>
            <li>
              <strong>PostgreSQL</strong> - Relational Table Data
            </li>
            <li>
              <strong>.NET</strong> - C#
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default MainHome;
