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
        Software Engineer with hands-on experience in Full-Stack, frontend, and
        desktop application development using modern technologies. I have worked
        on ERP systems for the insurance sector and public-sector data
        visualization platforms, contributing to scalable software solutions,
        responsive interfaces, and enterprise workflows. Back-End is where I
        perform best, but I am equally comfortable on the Front-End, which gives
        me strong versatility across the stack. I am always eager to learn new
        technologies and keep growing within the industry.
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
              C#, TypeScript, JavaScript, Python, C++, GDScript, HTML5, CSS3.
            </p>
            <br />
            <p>
              <span className="specialTxt">-Frameworks & Libraries: </span>{" "}
              React, Angular, Spring Boot, .NET Framework, REST APIs, JWT
              Authentication, Spring Security, WinForms/WPF.
            </p>
            <br />
            <p>
              <span className="specialTxt">-Databases: </span> SQL Server,
              MySQL, Oracle SQL, MongoDB.
            </p>
            <br />
            <p>
              <span className="specialTxt">-DevOps & Tools: </span> Git, GitHub,
              Azure DevOps, GitHub Actions, CI/CD Pipelines, Power BI.
            </p>
            <br />
            <p>
              <span className="specialTxt">-Testing & QA: </span> JUnit, REST
              Assured, Selenium, Jest, Apache JMeter, Qodana.
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
              At{" "}
              <span className="specialTxt">
                Ministerio de Trabajo y Seguridad Social (MTSS)
              </span>
              , I designed and developed a frontend solution to visualize a
              Power BI application for a Social and Solidarity Economy
              observatory, implementing 7 interactive dashboards covering all
              Costa Rican provinces.
            </p>
            <br />
            <p>
              During my internship at{" "}
              <span className="specialTxt">Desa Seguros</span>, I contributed to{" "}
              <span className="specialTxt">SASEG</span>, an insurance ERP
              platform serving 15+ companies, helping reduce manual prospect
              contact operations by 85%.
            </p>
            <br />
            <p>
              University projects include{" "}
              <span className="specialTxt">El Bazar de las Sorpresas</span> (a
              fictional bookshop WebApp),{" "}
              <span className="specialTxt">HelloApp!</span> (a social chat
              WebApp),{" "}
              <span className="specialTxt">Dungeon Master</span> (a 2D dungeon
              video game), and{" "}
              <span className="specialTxt">PetHotel</span> (a pet hotel &amp;
              veterinary WebApp).
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
              I hold a{" "}
              <span className="specialTxt">
                Scrum Foundation Professional Certificate (SFPC)
              </span>{" "}
              from SCRUMstudy and have experience working in Scrum environments
              across both professional and academic projects.
            </p>
            <br />
            <p>
              I am fluent in{" "}
              <span className="specialTxt">Spanish</span> (native),{" "}
              <span className="specialTxt">English</span> (C1, Cambridge B2
              First – Grade A), and have beginner knowledge of{" "}
              <span className="specialTxt">Japanese</span> (A1).
            </p>
            <br />
            <p>
              My <span className="specialTxt">soft skills</span> include:
            </p>
            <br />
            <p>- Problem Solving.</p>
            <p>- Team Collaboration.</p>
            <p>- Communication.</p>
            <p>- Adaptability.</p>
            <p>- Leadership.</p>
            <p>- Resilience.</p>
            <p>- Continuous Learning.</p>
            <p>- Analytical Thinking.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
