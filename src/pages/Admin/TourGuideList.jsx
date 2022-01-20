import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./DashBoard/DashBoard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllTourGuide, deleteTourGuide } from "../../Redux/actions/Tourguide";

const TourGuideList = () => {
  const dispatch = useDispatch();
  const tourGuidesData = useSelector(
    (state) => state.getAllTourGuideReducer?.fetchDAta
  );

  useEffect(() => {
    dispatch(getAllTourGuide());
  }, [dispatch]);

  const deleteData = (id) => {
    dispatch(deleteTourGuide(id));
  };

  return (
    <div className="row">
      <div className="d-flex align-items-stretch">
        <div className="col-md-2">
          <Dashboard />
        </div>
        <div id="content" className="p-4 p-md-5 pt-5 col-md-10">
          <h1>Tour Guide List</h1>
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>district</th>
                <th>place</th>
                <th>Phone Nubmer</th>
                <th>Mail</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {tourGuidesData?.map((ed) => {
                return (
                  <>
                    <tr>
                      <td>{ed.info?.name}</td>
                      <td>{ed.district}</td>
                      <td>{ed.place}</td>
                      <td>{ed.info?.phone_number}</td>
                      <td>{ed.info?.email}</td>
                      <td>
                        <div className="d-flex justify-content-around">
                          <div>
                            <Link to={`/admin/tourguide/${ed._id}`}>
                              <i className="far fa-edit editIcon"></i>
                            </Link>
                          </div>
                          <div>
                            <i
                              onClick={() => deleteData(ed._id)}
                              className="fas fa-trash-alt deleteIcon"
                            ></i>
                          </div>
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

export default TourGuideList;
