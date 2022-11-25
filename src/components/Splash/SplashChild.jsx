import "./SplashChild.css";

function SplashChild(props) {
  return (
    <header className="splash_child">
      <h1>{props.PageName}</h1>
      <p>{props.LinkTo}</p>
    </header>
  );
}

export default SplashChild;
