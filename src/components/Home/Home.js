import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="layout layer1">
      <div className="homeContent">
        <span className="greetings">Hi!</span>
        <span className="homeTxt">
          I'm <span className="name">Ignacio Zelada</span>
          <br />
          Junior Software Developer
        </span>
        <p className="homeParagraph">
          I am junior developer centered in learning the newest tecnologies &
          best practices in multiple fields. <br /> I had have expirience in
          developing multiple kinds of aplications, from Web Applications to
          even Terminal <br />
          Applications applaying different technolgies in both Front and Back
          Ends of the projects.
        </p>
      </div>
    </section>
  );
};

export default Home;
