import "./Splash.css";

function SplashPage(props) {
  return (
    <header className="splash_page">
      <div className="splash_page_left">
        <h1>Hi, I'm Dhruv!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, hic.
          Ad sunt tenetur voluptas minus laborum ducimus at unde blanditiis, ut
          ipsam esse vero sit numquam, velit, soluta neque id!
        </p>

        <button type="button">Read More</button>
      </div>
      <div className="splash_page_right">
        <img src={props.img} alt={props.alt} />
      </div>
    </header>
  );
}

export default SplashPage;
