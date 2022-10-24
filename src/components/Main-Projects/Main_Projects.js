import "./Main_Projects.css";

// Spicy Component
import ProjectShow from "./Projects-Show/ProjectsShow";

// Images
import DhruvBanking from "../../images/projects/dhruv_banking.png";
import DhruvData from "../../images/projects/dhruv_data.png";
import EnviroClubWebsite from "../../images/projects/eviro_club_website.png";
import HavenBot from "../../images/projects/haven_bot.png";
import OJCBadesWebsite from "../../images/projects/ojc_badges_website.png";

function MainProjects() {
  return (
    <main>
      <ProjectShow
        src={DhruvBanking}
        name="Dhruv Banking"
        desc="The future of banking"
        GithubUrl="https://github.com/Dhruv-Banking"
      />
      <ProjectShow
        src={DhruvData}
        name="Dhruv Data"
        desc="The newest database"
        GithubUrl="https://github.com/Dhruv-Banking"
      />
      <ProjectShow
        src={EnviroClubWebsite}
        name="Enviro Club Website"
        desc="Enviro Club Website"
        GithubUrl="https://github.com/Dhruv-Banking"
      />
      <ProjectShow
        src={HavenBot}
        name="Haven Bot"
        desc="My spicy new discord bot"
        GithubUrl="https://github.com/Dhruv-Banking"
      />
      <ProjectShow
        src={OJCBadesWebsite}
        name="OJC Badges Website"
        desc="A website I made for badges at my previoud school"
        GithubUrl="https://github.com/Dhruv-Banking"
      />
    </main>
  );
}

export default MainProjects;
