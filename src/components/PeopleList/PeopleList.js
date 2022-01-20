import React from "react";
import Navbar from "../Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const PeopleList = (props) => {
  const dispatch = useDispatch();

  const filterTourGuides = useSelector(
    (state) => state.findGuidesByDistrictAndPlaceReducer?.fetchDAta?.data
  );

  console.log(props);
  return (
    <>
      <Navbar />
      <h1>People List</h1>
      <ul class="list-group">
        {filterTourGuides?.map((tourguides) => {
          return (
            <Link to={`/${tourguides._id}`}>
              <li class="list-group-item">{tourguides.info.name}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default PeopleList;
