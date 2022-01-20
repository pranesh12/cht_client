import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
const AdminPrivateRoute = ({ children, ...rest }) => {
  const state = useSelector((state) => state.loginUserReducer.currentUser);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.email && state.isAdmin === true
          ? children
          : (window.location = "/auth")
      }
    />
  );
};

export default AdminPrivateRoute;
