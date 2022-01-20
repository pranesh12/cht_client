import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import PlaceNames from "../../components/PlaceNames/PlaceNames";
import { getPlaceByDistrict } from "../../Redux/actions/Tourguide";

const Rangamati = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaceByDistrict("rangamati"));
  }, [dispatch]);
  const placeState = useSelector((state) => state.getPlaceReducer.fetchDAta?.data);

  return (
    <>
      <Navbar />
      <PlaceNames district={placeState} />
    </>
  );
};

export default Rangamati;
