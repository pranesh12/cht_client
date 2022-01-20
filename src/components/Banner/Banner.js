import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
const Banner = ({ props }) => {
  const { primaryHeader, secondDarayHeader, paragraph, btn } = props.banner;
  return (
    <div className="banner">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 banner_left">
            <div>
              <p className="banner_paragraph">{primaryHeader}</p>
            </div>
            <div>
              <h1 className="banner_heading">{secondDarayHeader}</h1>
            </div>
            <div>
              <p className="banner_paragraph">{paragraph}</p>
            </div>
            <div>
              <Link className="Rating" to="/review">
                <h5>{btn}</h5>
              </Link>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
