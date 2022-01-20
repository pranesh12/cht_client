import React from "react";
import "./Information.css";

const Information = ({ props }) => {
  const { header, subHeader, address, email, list, info } = props.information;
  return (
    <div className="information">
      <div className="container">
        <div className="information_container">
          <div className="row">
            <div className="col-md-8">
              <div>
                <h1>{header}</h1>
              </div>
              <div>
                <h2>{subHeader}</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <div>
                  <small>{info}</small>
                </div>
                <div>
                  <address>{address}</address>
                </div>
                <div>
                  <h3>{email}</h3>
                </div>
              </div>
              <div>
                <p>{list.first}</p>
                <p>{list.second}</p>
                <p>{list.second}</p>
                <p>{list.forth}</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
