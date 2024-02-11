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
        on software development and become a full-stack developer one day. My
        strong area of the development is Back-End development, but I can also
        deliver a good performance at the Front-End area. I am versitile,
        beacuse I am able to work with different technologies and -if the
        programm requires it- willing to learn new ones.
      </span>
      <div className="skillList">
        <div className="skill">
          <img src={techImg} alt="Technologies" className="skillImage" />
          <div className="skillText">
            <h2>Technologies</h2>
            <p>
              -Programming Languages: Java, JavaScript, HTML, CSS, PL/SQL,
              MySQL, C++, C# and ASSEMBLY.
            </p>
            <p>
              -FrameWorks & Libraries: React Native, NodeJS, LibGDX, ASP
              .NET/ASP.NET Core, SpringBoot, Maven and Bootstrap.
            </p>
            <p>
              -Development Enviroments: IntelliJ IDEA, VS CODE , VS 2022, SQL
              Management Server, Oracle and MSX88.
            </p>
          </div>
        </div>
        <div className="skill">
          <img
            src={devImg}
            alt="Web & App Development"
            className="skillImage"
          />
          <div className="skillText">
            <h2>App Development</h2>
            <p>
              {" "}
              Thanks to my personal career intrests and to my college focus, I
              already have experience in all kinds of app development especially
              in web app development. I was able to develop 3 different web apps
              as college projects, those are: PetHotel (WebApp for a fictional
              pet hotel & veterinary), El Bazar de las Sorpresas (WebApp for a
              fictional bookstore ) and HelloApp! (WebApp which simulated a chat
              app). <br />
              Still, I perform greatly in app development thanks to a main
              project that I was part of, Dungeon Master (A 2D dungeon leveled
              game with a class system based on: a knight, an archer and a
              hunter).
            </p>
          </div>
        </div>
        <div className="skill">
          <img src={skillsImg} alt="Other Skills" className="skillImage" />
          <div className="skillText">
            <h2>Other Skills</h2>
            <p>
              In this section, I will remark that I have expirience working at
              SCRUM Based projects and also list my soft-skills, which are as
              follows:
            </p>
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
