import React from "react";
import "./Portfolio.css";
import github from "../../assets/assets/github-mark.png";
import project1 from "../../assets/assets/dungeonmastersc.PNG";
import project2 from "../../assets/assets/bazarsorpresassc.PNG";
import project3 from "../../assets/assets/pethotelsc.PNG";
import project4 from "../../assets/assets/helloappsc.PNG";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="portfolioTitle">Portfolio</h2>
      <br />
      <span className="portfolioDescription">
        Here you will be able to find pictures overviews of my mentioned
        projects. As well to a button to go for my GitHub repository filled with
        my main projects and minor work. Also,{" "}
        <a className="cv" href="../../assets/cv/IgnacioZeladaCV.pdf">
          click here
        </a>{" "}
        to look at my CV.
      </span>
      <br />
      <div className="portfolioImages">
        <img src={project1} alt="" className="portfolioImage" />
        <img src={project2} alt="" className="portfolioImage" />
        <img src={project3} alt="" className="portfolioImage" />
        <img src={project4} alt="" className="portfolioImage" />
      </div>
      <button
        className="githubButton"
        onClick={() => {
          window.location = "https://github.com/IgnacioZAraya";
        }}
      >
        <img src={github} alt="" className="githubImage" /> My Repository
      </button>
    </section>
  );
};

export default Portfolio;
