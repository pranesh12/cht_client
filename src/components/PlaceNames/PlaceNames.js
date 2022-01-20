import React from "react";
import { useDispatch } from "react-redux";
import { findTourguideByDistrictAndPlace } from "../../Redux/actions/Tourguide";
import { Link, useHistory } from "react-router-dom";
import "./PlaceNames.css";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

const PlaceNames = ({ district }) => {
  const districtName = district?.[0].district;
  const dispatch = useDispatch();
  const { url } = useRouteMatch();
  const history = useHistory();
  console.log(url);

  const handlePlace = async (e) => {
    const place = await e.target.innerText;
    await dispatch(findTourguideByDistrictAndPlace(districtName, place));
    history.push(`/${districtName}/guides`);
  };

  const fileterPlace = district?.filter(
    (value, index, self) => index === self.findIndex((t) => t.place === value.place)
  );

  useEffect(() => {});

  return (
    <>
      <div className="container">
        <h1>{districtName}</h1>
        <ul className="list-group">
          {fileterPlace?.map((place) => {
            return (
              <li
                className="placeName list-group-item"
                onClick={handlePlace}
                key={place.id}
              >
                {place.place}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default PlaceNames;
