import "./Main_Home.css";

function MainHome(props) {
  return (
    <main>
      <div id="#projects" className="projects">
        <h2>Projects</h2>
        <p>
          <strong>Here is a quick look at some of my best projects</strong>
        </p>

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
    </main>
  );
}

export default MainHome;
