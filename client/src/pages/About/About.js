import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="E:\Mern-Portfolio-Project-main\Doc.png"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
               i am Ganesh Giri,Recent IT graduate with a passion for building dynamic, user-friendly web applications. Skilled in JavaScript, React, Node.js, and MySQL.Collaborated with a team to develop a full-stack e-commerce platform as a capstone project. Seeking to leverage my technical abilities and strongproblem-solving skills in an entry-level full stack developer role.
  
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
