import React from "react";
import SubArticleCard from "./SubArticleCard";
import "./SubArticle.css";
const SubArticle = ({ data }) => {
  return (
    <div className="sub_article">
      <div className="container ">
        <h1 className="text-center mt-5 mb-5 ar_header"> Articles</h1>
        <div className="row gx-3 gy-5">
          <SubArticleCard filterData={data} />
        </div>
      </div>
    </div>
  );
};

export default SubArticle;
