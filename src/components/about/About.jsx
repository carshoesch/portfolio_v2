import React from "react";
import "./styles.scss";
import Chip from "../chip/Chip";

const About = () => {
  const aboutTxt =
    "I am a fullstack software developer with a focus on frontend-, backend development and data analysis/engineering. I have experience in developing web platforms using React and Vue, APIs using Golang and creating data pipelines with Python. I am passionate about puzzles, technology and learning new things.";
  const skills = [
    "React",
    "Vue",
    "JavaScript",
    "TypeScript",
    "Golang",
    "HTML",
    "CSS",
    "SASS",
    "Node.js",
    "Python",
    "SQL",
    "Git",
    "Jest",
    "Pandas",
  ];

  return (
    <div className="aboutWrapper" id="about">
      <section className="about">
        <div className="about__description">
          <h2>About</h2>
          <p className="aboutTxt">{aboutTxt}</p>
        </div>
        <div className="about__skills">
          <h2>Skills and Technologies</h2>
          <div className="skills">
            <Chip labelList={skills} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
