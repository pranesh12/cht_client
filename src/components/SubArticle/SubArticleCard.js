import React from "react";
import { Link } from "react-router-dom";
import "./SubArticleCard.css";
const Cards = ({ filterData }) => {
  return (
    <>
      {filterData?.map((data) => {
        return (
          <div className="col-md-3">
            <div className="card subArticle_card">
              {
                <img
                  style={{ min_width: "500px", height: "300px" }}
                  src={data.data.image}
                  className="card-img-top img_top "
                  alt={data.subType}
                />
              }
              <div className="card_lower_body d-flex justify-content-center align-items-center">
                <p className="mt-2 card_title">
                  <Link className="card_link" to={`/${data.category}/${data._id}`}>
                    {data.data.header}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
