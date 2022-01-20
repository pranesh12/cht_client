import React from "react";
import "./About.css";
import person from "../../images/person.png";
const About = ({ props }) => {
  const { header, detail, list, btn } = props.about;
  return (
    <div className="about">
      <div className=" container">
        <div className="row about_row">
          <div className="col-md-6">
            <div className="about_header">
              <h1>{header}</h1>
            </div>
            <div className="about_content">
              <p>{detail}</p>
            </div>
            <div className="about_iconlist">
              <div>
                <i class="far fa-lightbulb"> </i>
                <span className="m-3">{list.first}</span>
              </div>
              <div>
                <i class="fas fa-language"></i>
                <span className="m-3">{list.second}</span>
              </div>
              <div>
                <i class="fas fa-drafting-compass"></i>
                <span className="m-3">{list.third}</span>
              </div>
              <div>
                <i class="fab fa-wpexplorer"></i>
                <span className="m-3">{list.forth}</span>
              </div>
            </div>
            <div>
              <button className="btn about_button">{btn}</button>
            </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={person} alt="person" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
