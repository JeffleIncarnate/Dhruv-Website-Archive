import "./Quotes.css";
import React from "react";

function Quotes() {
  const quotes = [
    '"Sir -- I am not dyslexic, please" - Me',
    `"You know what they say! When you're out of ideas, Hitler's always there for you!" - Me`,
    `"The Indian is speaking to me!" - Me`,
    `"But just tell everyone I'm sick" - Me (who is skipping school to do more school work)`,
  ];
  const delay = 5000;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    }; // eslint-disable-next-line
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)`, display: "block" }}
      >
        {quotes.map((quote, index) => (
          <div className="slide" key={index}>
            <p>{quote}</p>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {quotes.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active_dot" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Quotes;
