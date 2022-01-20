import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import PlaceNames from "../../components/PlaceNames/PlaceNames";
import { getPlaceByDistrict } from "../../Redux/actions/Tourguide";

const Bandarban = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaceByDistrict("bandarban"));
  }, [dispatch]);
  const placeState = useSelector((state) => state.getPlaceReducer.fetchDAta?.data);

  return (
    <>
      <Navbar />
      <PlaceNames district={placeState} />
    </>
  );
};

export default Bandarban;
