import React from "react";
import ProfImg from "../assets/images/family.jpeg";

const Aboutme = () => {
  return (
    <div className="container">
      <div className="card mb-3" id="hero">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={ProfImg}
              className="img-fluid rounded-start"
              alt="Mikes Avatar"
            />
          </div>
          <div className="col-md-8" id="about-me">
            <div className="card-body" id="about-me">
              <h5 className="card-title" id="about-me">
                {" "}
                Life of Mike{" "}
              </h5>
              <p className="card-text" id="about-me">
                My name is Michael Harrison. I am a 27 year old from Austin,
                Texas trying to make a career change into the world of tech! On
                the left is a partial picture of my mother and sister-in-law and
                I at my father's 21 Gun Salute. Family means everything to me
                and there are no lengths at which I won't go for them. I'm ready
                to show them what I can do with my Full Stack Developer
                Certification!
              </p>

              <p>
                Outside of becoming the best Web/Software Developer that I can
                be, I spend all my money on Golf and coming up with applications
                for Golf!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
