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
        desc="Welcome to Pogformer, a Mario like platformer but with cubes."
        GithubUrl="https://dhruv-rayat.itch.io/pogformer"
        icon={<FaItchIo />}
      />
      <ProjectShow
        src={FourDPhysicsGame}
        name="4D Physics Game"
        desc="This was my latest game, 4D Physics. It uses the 4th dimention, time!"
        GithubUrl="https://dhruv-rayat.itch.io/4d-physics-game"
        icon={<FaItchIo />}
      />
    </main>
  );
}

export default MainGames;
