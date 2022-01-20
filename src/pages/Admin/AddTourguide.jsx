import React, { useState } from "react";
import Dashboard from "./DashBoard/DashBoard";
import { useDispatch } from "react-redux";
import FileBase64 from "react-file-base64";
import { addTourGuide } from "../../Redux/actions/Tourguide";

const AddTourGuide = () => {
  const dispatch = useDispatch();
  const [tourGuideData, setTourGuideData] = useState({
    district: "khagrachari",
    place: "",
    name: "",
    email: "",
    status: "avilable",
    img: "",
    phone_number: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTourGuide(tourGuideData));
    console.log(tourGuideData);
  };
  const handleChange = (e) => {
    setTourGuideData({
      ...tourGuideData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="row">
      <div className="d-flex align-items-stretch">
        <div className="col-md-2">
          <Dashboard />
        </div>
        <div id="content" className="p-4 p-md-5 pt-5 col-md-10">
          <h2 className="mb-4 text-center">Add Article</h2>

          {/* Adding form */}
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <select
                className="form-select"
                type="select"
                name="district"
                value={tourGuideData.district}
                onChange={handleChange}
              >
                <option value="khagrachari">khagrachari</option>
                <option value="rangamati">Rangamati</option>
                <option value="bandarban">Bandarban</option>
              </select>
            </div>

            <div class="mb-3">
              <input
                className="form-control"
                type="text"
                name="place"
                placeholder="place"
                onChange={handleChange}
                value={tourGuideData.place}
              />
            </div>
            <div class="mb-3">
              <FileBase64
                label="Image"
                fullWidth
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setTourGuideData({ ...tourGuideData, img: base64 })
                }
              />
            </div>
            <div class="mb-3">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Name"
                value={tourGuideData.name}
                onChange={handleChange}
              />
            </div>
            <div class="mb-3">
              <input
                className="form-control"
                type="text"
                name="phone_number"
                placeholder="Phone Number"
                value={tourGuideData.phone_number}
                onChange={handleChange}
              />
            </div>
            <div class="mb-3">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                value={tourGuideData.email}
                onChange={handleChange}
              />
            </div>
            <div class="mb-3">
              <select
                className="form-select"
                type="select"
                name="status"
                value={tourGuideData.status}
                onChange={handleChange}
              >
                <option value="avilable">Avilable</option>
                <option value="not-avilable">Not avilable</option>
              </select>
            </div>

            <button className="btn submit_button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTourGuide;
