import React from "react";
import "./section.css";
import othersvg from "../../images/svg/other.svg";
import promotionsvg from "../../images/svg/promotion.svg";
import reasearchsvg from "../../images/svg/research.svg";

const Section = ({ props }) => {
  const { firstCard, secondCard, thirdCard } = props.section;
  return (
    <div className="section">
      <div className="container">
        <div className="row gx-3 gy-5">
          <div className="col">
            <div className="card about_card" style={{ width: "20rem" }}>
              <div className="card-body">
                <img
                  className="img-fluid section_img"
                  src={promotionsvg}
                  alt="promotionsvg"
                />
                <h2 className="card-title section_header">{firstCard.header}</h2>
                <p className="card-text section_text">{firstCard.detail}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card about_card" style={{ width: "20rem" }}>
              <div className="card-body">
                <img
                  className="img-fluid section_img"
                  src={othersvg}
                  alt="othersvg"
                />
                <h2 className="card-title section_header">{secondCard.header}</h2>
                <p className="card-text section_text">{secondCard.detail}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card about_card" style={{ width: "20rem" }}>
              <div className="card-body">
                <img
                  className="img-fluid section_img"
                  src={reasearchsvg}
                  alt="reasearchsvg"
                />
                <h2 className="card-title section_header">{thirdCard.header}</h2>
                <p className="card-text section_text">{thirdCard.detail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
