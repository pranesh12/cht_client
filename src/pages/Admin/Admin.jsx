import React, { useEffect } from "react";
import Dashboard from "./DashBoard/DashBoard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteArticle, getArticleData } from "../../Redux/actions/article";

const Admin = () => {
  const dispatch = useDispatch();
  const articleData = useSelector((state) => state.articleReducer.fetchDAta);

  useEffect(() => {
    dispatch(getArticleData());
  }, [dispatch]);

  const deleteData = (id) => {
    dispatch(deleteArticle(id));
  };

  return (
    <div className="row">
      <div className="d-flex align-items-stretch">
        <div className="col-md-2">
          <Dashboard />
        </div>
        <div id="content" className="p-4 p-md-5 col-md-10">
          <table class="table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Header</th>
                <th>writer</th>
                <th>Data</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {articleData?.map((ed) => {
                return (
                  <>
                    <tr>
                      <td>{ed.category}</td>
                      <td>{ed.data.header}</td>
                      <td>{ed.writer}</td>
                      <td>{ed.data.article.slice(0, 50)}</td>
                      <td>
                        <div className="d-flex justify-content-around">
                          <div>
                            <Link to={`/admin/edit/${ed._id}`}>
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

export default Admin;
