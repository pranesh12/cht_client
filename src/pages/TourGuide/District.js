import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import PlaceNames from "../../components/PlaceNames/PlaceNames";
import { getPlaceByDistrict } from "../../Redux/actions/Tourguide";

const District = () => {
  const dispatch = useDispatch();
  const { district } = useParams();
  console.log(district);

  useEffect(() => {
    dispatch(getPlaceByDistrict("khagrachari"));
  }, [dispatch]);
  const placeState = useSelector((state) => state.getPlaceReducer.fetchDAta?.data);

  return (
    <>
      <Navbar />
      {/* <PlaceNames district={placeState} /> */}
    </>
  );
};

export default District;
