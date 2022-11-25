import "./ProjectShow.css";

function ProjectShow(props) {
  return (
    <div className="projects_show_wrapper">
      <img src={props.src} alt={props.alt} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
      </div>

      <a href={props.GithubUrl} rel="noreferrer" target="_blank">
        {props.icon}
      </a>
    </div>
  );
}

export default ProjectShow;
