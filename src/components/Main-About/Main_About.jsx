import "./Main_About.css";

function MainAbout() {
  return (
    <main className="about_main">
      <div className="about_me">
        <h2>About Me</h2>
        <p>
          My name is Dhruv and I've been learning to code for about 3 years now.
          I've branched into Full Stack web development, Game development, Low
          level systems
        </p>
      </div>
      <div className="about_experiences">
        <h2>Experiences</h2>

        <h3>2022</h3>
        <ul>
          <li>
            <strong>Programming contest</strong> - Programming challenge hosted
            at Auckland University
          </li>
          <li>
            <strong>Epro8</strong> - Enginnering challenge
          </li>
          <li>
            <strong>Dhruv Banking</strong> - Comp Sci assesment
          </li>
          <li>
            <strong>OSC Enviro Club Website</strong> - Creating a website for my
            club
          </li>
        </ul>

        <h3>2021</h3>
        <ul>
          <li>
            <strong>Manutaki</strong> - Student Leader
          </li>
          <li>
            <strong>OJC Flight Simulator</strong> - Hosting a Flight Simulator
            club
          </li>
          <li>
            <strong>OJC In VR</strong> - Presenting our model to primaty
            students
          </li>
        </ul>
      </div>
    </main>
  );
}

export default MainAbout;
