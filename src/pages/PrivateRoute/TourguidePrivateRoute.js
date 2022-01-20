import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
const TourguidePrivateRoute = ({ children, ...rest }) => {
  const state = useSelector((state) => state.loginUserReducer.currentUser);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.isGuide === true ? children : (window.location = "/auth")
      }
    />
  );
};

export default TourguidePrivateRoute;
