import React, { useEffect } from "react";
import Dashboard from "./DashBoard/DashBoard";
import { useSelector, useDispatch } from "react-redux";
import { getAllUserData, removeUserAccount } from "../../Redux/actions/userAction";

const UserList = () => {
  const dispatch = useDispatch();
  const UserListState = useSelector((state) => state.getAllUserReducer.userList);

  useEffect(() => {
    dispatch(getAllUserData());
  }, [dispatch]);

  const deleteAccount = (id) => {
    dispatch(removeUserAccount(id));
  };
  return (
    <div className="row">
      <div className="d-flex align-items-stretch">
        <div className="col-md-2">
          <Dashboard />
        </div>
        <div id="content" className="p-4 p-md-5 pt-5 col-md-10">
          <h1>User List</h1>

          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Delete Account</th>
              </tr>
            </thead>
            <tbody>
              {UserListState?.map((ed) => {
                return (
                  <>
                    <tr>
                      <td>{ed.name}</td>
                      <td>{ed.email}</td>
                      <td>
                        <div>
                          <i
                            onClick={() => deleteAccount(ed._id)}
                            className="fas fa-trash-alt deleteIcon"
                          ></i>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
