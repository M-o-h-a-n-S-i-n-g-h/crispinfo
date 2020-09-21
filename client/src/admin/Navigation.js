import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navigation = () => (
  <div className="bg-dark">
    <ul className="nav nav-tabs bd-dark">
      <li className="nav-item">
        <Link className="nav-link text-primary" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-primary" to="/admin/dashboard">
          A.Dashboard
        </Link>
      </li>
    </ul>
  </div>
);

export default withRouter(Navigation);
