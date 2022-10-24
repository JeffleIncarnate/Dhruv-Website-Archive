import "./Main_Projects.css";

// Spicy Component
import ProjectShow from "./Projects-Show/ProjectsShow";

// Images
import DhruvBanking from "../../images/projects/dhruv_banking.png";

function MainProjects() {
  return (
    <main>
      <ProjectShow
        src={DhruvBanking}
        name="Dhruv Banking"
        desc="The future of banking"
        GithubUrl="https://github.com/Dhruv-Banking"
      />
    </main>
  );
}

export default MainProjects;
