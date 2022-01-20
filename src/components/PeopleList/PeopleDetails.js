import React from "react";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PeopleDetails = () => {
  const { guideId } = useParams();
  const data = useSelector(
    (state) => state?.findGuidesByDistrictAndPlaceReducer?.fetchDAta
  );
  const foundedData = data?.data;
  const filterData = foundedData?.filter((data) => data._id === guideId);
  console.log(filterData);
  return (
    <>
      {filterData?.map((guide) => {
        return (
          <>
            <p>{guide.info.name}</p>
            <p>{guide.info.email}</p>
            <p>{guide.info.phone_number}</p>
            <p>{guide.info.status}</p>
          </>
        );
      })}
    </>
  );
};

export default PeopleDetails;
