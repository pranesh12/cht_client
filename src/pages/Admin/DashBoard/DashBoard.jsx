import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../Redux/actions/userAction";
import "./DashBoard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <nav className="sidebar">
      <h2 className="admin_Heading">Admin Section</h2>
      <ul className="list-unstyled components mb-5 mt-5 ms-2">
        <li className="active">
          <NavLink to="/admin">
            <span className="fa fa-home"></span>{" "}
            <span className="sidebar_heading">Homepage</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/userlist">
            <span className="fa fa-user"></span>{" "}
            <span className="sidebar_heading">User List</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/addcourse">
            <i class="far fa-plus-square"></i>{" "}
            <span className="sidebar_heading">Add Article</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/tourguidelist">
            <span className="fa fa-user"></span>{" "}
            <span className="sidebar_heading">Tour Guide List</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/addtourguide">
            <span className="fa fa-user"></span>{" "}
            <span className="sidebar_heading">Add Tourguide</span>
          </NavLink>
        </li>
        <li onClick={() => dispatch(logoutUser())}>
          <NavLink to="#">
            <i class="fas fa-sign-out-alt"></i>{" "}
            <span className="sidebar_heading">Log out</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Dashboard;
