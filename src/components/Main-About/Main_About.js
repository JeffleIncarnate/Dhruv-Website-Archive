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
            Programming contest - Programming challenge hosted at Auckland
            University
          </li>
          <li>Epro8 - Enginnering challenge</li>
          <li>Dhruv Banking - Comp Sci assesment</li>
          <li>OSC Enviro Club Website - Creating a website for my club</li>
        </ul>

        <h3>2021</h3>
        <ul>
          <li>Manutaki - Student Leader</li>
          <li>OJC Flight Simulator - Hosting a Flight Simulator club</li>
          <li>OJC In VR - Presenting our model to primaty students</li>
        </ul>
      </div>
    </main>
  );
}

export default MainAbout;
