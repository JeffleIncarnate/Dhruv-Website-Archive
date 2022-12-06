import "./Splash.css";

function SplashPage(props) {
  return (
    <header className="splash_page">
      <div className="splash_page_left">
        <h1>Hiya, I'm Dhruv!</h1>
        <p>
          Hey! Welcome to my website :D. I hope you have a fun time. It was made
          in React, with Javascript
        </p>

        <button
          type="button"
          onClick={() => {
            window.scrollBy(0, 750);
          }}
        >
          Read More
        </button>
      </div>
      <div className="splash_page_right">
        <img src={props.img} alt={props.alt} />
      </div>
    </header>
  );
}

export default SplashPage;
