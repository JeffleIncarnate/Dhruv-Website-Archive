import "./Main_Games.css";

// Spicy Component
import ProjectShow from "../Main-Projects/Projects-Show/ProjectsShow";
import { FaItchIo } from "react-icons/fa";

// Images
import Pogformer from "../../images/games/pogformer.png";
import FourDPhysicsGame from "../../images/games/4_d_physics.png";

function MainGames() {
  return (
    <main>
      <ProjectShow
        src={Pogformer}
        name="Pogformer"
        desc="The best game"
        GithubUrl="https://github.com/Dhruv-Banking"
        icon={<FaItchIo />}
      />
      <ProjectShow
        src={FourDPhysicsGame}
        name="4D Physics Game"
        desc="The best game"
        GithubUrl="https://github.com/Dhruv-Banking"
        icon={<FaItchIo />}
      />
    </main>
  );
}

export default MainGames;
