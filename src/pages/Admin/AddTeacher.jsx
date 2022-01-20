import React from "react";
import Dashboard from "./DashBoard/DashBoard";

const AddTeacher = () => {
  return (
    <div className="row">
      <div className="d-flex align-items-stretch">
        <div className="col-md-2">
          <Dashboard />
        </div>
        <div id="content" className="p-4 p-md-5 pt-5 col-md-10">
          <h1>Add teacher</h1>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
