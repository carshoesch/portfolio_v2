import React from "react";
import "./styles.scss";
import Chip from "../chip/Chip";

const About = () => {
    const aboutTxt =
        "I am a software developer with a focus on frontend development and data analysis/engineering. I have experience in developing web platforms using React and Vue. I am passionate about puzzles, technology and learning new things.";
    const skills = [
        { label: "React" },
        { label: "Vue" },
        { label: "JavaScript" },
        { label: "TypeScript" },
        { label: "HTML" },
        { label: "CSS" },
        { label: "SASS" },
        { label: "Node.js" },
        { label: "Python" },
        { label: "SQL" },
        { label: "Git" },
        { label: "Jest" },
        { label: "Pandas" },
    ];

    return (
        <div className="aboutWrapper" id="about">
            <section className="about">
                <div className="about__description">
                    <h2>About</h2>
                    <p>{aboutTxt}</p>
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
