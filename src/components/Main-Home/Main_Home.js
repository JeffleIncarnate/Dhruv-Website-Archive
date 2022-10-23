import "./Main_Home.css";

function MainHome(props) {
  return (
    <main>
      <div id="projects" className="projects">
        <h2>Projects</h2>

        <div className="projects_wrapper">
          <div className="dhruv_banking projects_left">
            <h3>Dhruv Banking</h3>
            <p>Learn More</p>
          </div>
          <div className="dhruv_data projects_right">
            <h3>Dhruv Data</h3>
            <p>Learn More</p>
          </div>
          <div className="haven_bot projects_left">
            <h3>Haven Bot</h3>
            <p>Learn More</p>
          </div>
          <div className="envio_club_website projects_right">
            <h3>Envro Club Website</h3>
            <p>Learn More</p>
          </div>
        </div>
      </div>

      <div id="aboutme" className="aboutme">
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
              <strong>PostgreSQL</strong> - Databases
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
