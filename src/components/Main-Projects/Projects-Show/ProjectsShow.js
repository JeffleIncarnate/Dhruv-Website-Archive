import "./ProjectShow.css";

import { FaGithub } from "react-icons/fa";

function ProjectShow(props) {
  return (
    <div className="projects_show_wrapper">
      <img src={props.src} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
      </div>

      <a href={props.GithubUrl} target="_blank">
        <FaGithub />
      </a>
    </div>
  );
}

export default ProjectShow;
