import React from "react";
import "./Footer.css";
let Year = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row d-flex  ">
          <div className="col-md-8">
            <div className="d-flex  align-items-baseline  ">
              <div>
                <p>&copy; {Year} All right's reserved</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 icon_list">
            <i class="fab fa-github-alt"></i>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-linkedin-in"></i>
            <i class="fas fa-envelope-open"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
