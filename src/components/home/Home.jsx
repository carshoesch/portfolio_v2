import React from "react";
import Navigation from "../navigation/Navigation";
import About from "../about/About";
import Work from "../work/Work";
import Contact from "../contact/Contact";
import "./styles.scss";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="homeWrapper" id="home">
        <section className="home">
          <div className="home__description">
            <span>Hi, my name is</span>
            <div className="name">
              <h2>Carsten Höschele</h2>
            </div>
            <p className="intro">
              Software developer specialized in Frontend and Data
              Analysis/Engineering.
            </p>
          </div>
        </section>
      </div>
      {/*about*/}
      <About />
      {/*work*/}
      <Work />
      {/*contact*/}
      <Contact />
    </div>
  );
};

export default Home;
