import React from "react";
import Chip from "../chip/Chip";

const WorkCarusel = () => {
  const workItems = [
    {
      title: "Current Portfolio",
      skills: ["React", "JavaScript", "SASS"],
      description: "This is my current portfolio where I showcase projects.",
    },
    {
      title: "Websites for a cultural organization",
      skills: ["JavaScript", "HTML", "CSS", "Wordpress"],
      description:
        "This is a ongoing project in which I'm employed as a freelancer for maintenance and further development",
    },
    {
      title: "Internal calendar application",
      skills: ["Vue", "JavaScript", "SASS", "Firebase"],
      description:
        "This application is used to manage the internal calendar of a sport club in which gym slots can be booked.",
    },
  ];

  const slides = workItems.map((item) => (
    <div key={item.title} className="workItem">
      <div className="card">
        <h3 className="card-title">{item.title}</h3>
        <div className="card-skills">
          <Chip labelList={item.skills} />
        </div>
        <p className="card-description">{item.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="workItemWrapper">
      <h2>Sideprojets</h2>
      {slides}
    </div>
  );
};

export default WorkCarusel;
