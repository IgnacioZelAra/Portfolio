import React from "react";
import "./About.css";
import techImg from "../../assets/assets/technologies.png";
import devImg from "../../assets/assets/development.png";
import skillsImg from "../../assets/assets/otherSkills.png";

export const About = () => {
  return (
    <section id="about">
      <span className="aboutTitle">About me</span>
      <br />
      <span className="aboutDescription">
        I am a young passionate junior software engineer looking foward to work
        on a software development company and become a senior Full-Stack
        developer one day. Back-End is where I perfom the best, but, I also have
        the knowledge to give a good perfmonce in Front-End giving me a good
        versatility in software development. My second strength is that I am
        able to work with a extense variety of tecnologies and I am always
        willing to learn new ones to maintain me updated.
      </span>
      <div className="skillList">
        <div className="skill">
          <img src={techImg} alt="Technologies" className="skillImage" />
          <br />
          <div className="skillText">
            <h2 className="subTitle">Technologies</h2>
            <br />
            <p>
              <span className="specialTxt">-Programming Languages: </span> Java,
              JavaScript, HTML, CSS, PL/SQL, MySQL, C++, C# and ASSEMBLY.
            </p>
            <br />
            <p>
              <span className="specialTxt">-FrameWorks & Libraries: </span>{" "}
              React Native, NodeJS, LibGDX, ASP .NET/ASP.NET Core, SpringBoot,
              Maven and Bootstrap.
            </p>
            <br />
            <p>
              <span className="specialTxt">-Development Enviroments: </span>
              IntelliJ IDEA, VS CODE , VS 2022, SQL Management Server, Oracle
              and MSX88.
            </p>
          </div>
        </div>
        <div className="skill">
          <img
            src={devImg}
            alt="Web & App Development"
            className="skillImage"
          />
          <br />
          <div className="skillText">
            <h2 className="subTitle">App Development</h2>
            <br />
            <p>
              {" "}
              I was able to develop with great success 2 different web apps as
              college projects, those are:{" "}
              <span className="specialTxt">
                {" "}
                El Bazar de las Sorpresas{" "}
              </span>{" "}
              (WebApp for a fictional bookshop ) and{" "}
              <span className="specialTxt">HelloApp! </span> (WebApp which
              simulated a social app based on chat). <br />
              Some other proyects that make me experience not only as a
              devoloper but also as a leader where a 2d Dungeon videogame called
              <span className="specialTxt"> Dungeon Master </span> and{" "}
              <span className="specialTxt">PetHotel </span>
              (WebApp for a pet hotel & veterinary).
            </p>
          </div>
        </div>
        <div className="skill">
          <img src={skillsImg} alt="Other Skills" className="skillImage" />
          <br />
          <div className="skillText">
            <h2 className="subTitle">Other Skills</h2>
            <br />
            <p>
              In this section, I will remark that I have expirience working at
              <span className="specialTxt"> SCRUM based</span> projects and also
              list my <span className="specialTxt">soft-skills</span> , which
              are as follows:
            </p>
            <br />
            <p>- Problem-solving.</p>
            <p>- Flexibility.</p>
            <p>- Teamwork.</p>
            <p>- Leadership.</p>
            <p>- Patience.</p>
            <p>- Resilience.</p>
            <p>- Communicative.</p>
            <p>- Keen on learning.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
