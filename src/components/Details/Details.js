import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getArticleData } from "../../Redux/actions/article";
import "./Details.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const fetchDataState = useSelector((state) => state.articleReducer.fetchDAta);
  const filterDetails = fetchDataState?.filter((data) => data._id === id);

  useEffect(() => {
    dispatch(getArticleData());
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  return (
    <>
      <Navbar />
      <div className="details_container">
        {filterDetails?.map((filterData) => {
          return (
            <div className="details">
              <div className="container">
                <h1 className="text-center pt-2 pb-5 details_header">
                  {filterData.data.header}
                </h1>
                <div className="d-flex justify-content-center mb-5">
                  <img
                    className="img-fluid"
                    src={filterData.data.image}
                    alt={filterData.data.header}
                  />
                </div>
                <div>
                  <p className="article_details">{filterData.data.article}</p>
                </div>
                <div className="mt-5 writer">
                  <p>লেখক: {filterData.writer}</p>
                  <p>Updated At: {filterData.createdAt.slice(0, 10)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Details;
