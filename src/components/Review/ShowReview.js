import React, { useState } from "react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllReview } from "../../Redux/actions/review";

const ShowReview = () => {
  const reviewState = useSelector((state) => state.getAllreviewReducer.fetchData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllReview());
  }, [dispatch]);
  return (
    <>
      {reviewState?.map((review) => {
        return (
          <>
            <div>
              <h1>{review.user.name}</h1>
              <h2>{review.comment}</h2>
              <p>{review.user.email}</p>
              <div>
                {Array(review.star)
                  .fill()
                  .map((_) => {
                    return (
                      <FaStar
                        size={24}
                        color={colors.orange}
                        style={{
                          marginRight: 10,
                          cursor: "pointer",
                        }}
                      />
                    );
                  })}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export default ShowReview;
