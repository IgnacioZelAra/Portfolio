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
          Software Engineer
        </span>
        <p className="homeParagraph">
          I build software that works — and works well. From enterprise ERP
          platforms in the insurance industry to public-sector data dashboards{" "}
          <br />
          reaching hundreds of users, I bring real production experience to
          every project. Whether you need a reliable backend, a clean and
          responsive frontend,
          <br /> or a full-stack solution, I adapt fast, collaborate in Scrum
          teams, and deliver results that matter. Let's build something great
          together.
        </p>
      </div>
    </section>
  );
};

export default Home;
