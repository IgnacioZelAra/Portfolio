import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="layout layer1">
      <div className="homeContent">
        <span className="greetings">Hi!</span>
        <span className="homeTxt">
          I'm <span className="name">Ignacio</span>
          <br />
          Junior Software Developer
        </span>
        <p className="homeParagraph">
          I am a junior developer centered on creating applications with an
          appealing UI that can also offer the best UX possible, thru <br /> the
          best implementation of services.
        </p>{" "}
      </div>
    </section>
  );
};

export default Home;
