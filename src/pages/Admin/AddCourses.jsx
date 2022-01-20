import React, { useState } from "react";
import Dashboard from "./DashBoard/DashBoard";
import { useDispatch } from "react-redux";
import FileBase64 from "react-file-base64";
import { addArticleData } from "../../Redux/actions/article";

const AddCourses = () => {
  const dispatch = useDispatch();
  const [articleData, setArticleData] = useState({
    category: "History",
    writer: "",
    header: "",
    article: "",
    img: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addArticleData(articleData));
  };
  const handleChange = (e) => {
    setArticleData({
      ...articleData,
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
                name="category"
                value={articleData.category}
                onChange={handleChange}
              >
                <option value="History">History</option>
                <option value="Art and Culture">Art and Culture</option>
                <option value="Education">Education</option>
                <option value="Potentiality in Cht">Potentiality in Cht</option>
              </select>
            </div>

            <div class="mb-3">
              <input
                className="form-control"
                type="text"
                name="header"
                placeholder="Header"
                onChange={handleChange}
                value={articleData.header}
              />
            </div>
            <div class="mb-3">
              <FileBase64
                label="Image"
                fullWidth
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setArticleData({ ...articleData, img: base64 })
                }
              />
            </div>
            <div class="mb-3">
              <input
                className="form-control"
                type="text"
                name="writer"
                placeholder="Writer"
                value={articleData.writer}
                onChange={handleChange}
              />
            </div>

            <div class="mb-3">
              <textarea
                style={{ height: "30vh" }}
                className="form-control"
                name="article"
                placeholder="Article"
                onChange={handleChange}
                value={articleData.article}
              />
            </div>
            <button className="btn submit_button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourses;
