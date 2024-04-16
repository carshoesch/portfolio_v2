import React from "react";
import WorkCarusel from "./WorkCarusel";
import "./styles.scss";

const Work = () => {
  return (
    <div className="workWrapper" id="work">
      <section className="work">
        <div className="work__description">
          <h2>Work</h2>
          <p className="workTxt">
            I have worked professionally on projects ranging from web/platform
            development to data analysis as well as building data pipelines with
            Python.
          </p>
        </div>
        <WorkCarusel />
      </section>
    </div>
  );
};

export default Work;
