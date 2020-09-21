import React from "react";
import Base from "../Core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper/index";
const AdminDashboard = ({ match }) => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className=" card-header bg-success text-white">Admin Header</h4>
        <ul className="list-group bg-dark">
          <li className="list-group-item">
            <Link to="/selectCategory" className="nav-link text-info">
              Select Category
            </Link>
          </li>
          <li className="list-group-item ">
            <Link
              to={`/blog/${match.params.id}/create`}
              className="nav-link text-info"
            >
              Create Blog
            </Link>
          </li>

          <li className="list-group-item ">
            <Link to="/create/category" className="nav-link text-info">
              Create Category
            </Link>
          </li>
          <li className="list-group-item ">
            <Link to="/manage/posts" className="nav-link text-info">
              Manage Posts
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4 bg-success">
        <h4 className="card-header ">Admin Information</h4>
        <ul className="list-group">
          <li className="list-group-item text-info">
            <strong className="badge badge-success ">Name : {name}</strong>
          </li>
          <li className="list-group-item text-info">
            <strong className="badge badge-success">Email : {email}</strong>
          </li>
          <li className="list-group-item text-info">
            <strong className="badge badge-danger">Admin Role : {role}</strong>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Base title="Welcome Admin" description="Manage your Posts here">
      <div className="row ">
        <div className="col-3">{adminLeftSide()}</div>
        <div className="col-9">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default React.memo(AdminDashboard);
