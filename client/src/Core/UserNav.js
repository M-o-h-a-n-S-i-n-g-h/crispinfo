import React, { Fragment, useState } from "react";
import { NavLink, Link, useHistory, withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { signout, isAuthenticated } from "../auth/helper";
import { RotateSpinner } from "react-spinners-kit";
import { GlobalNavbar } from "../utils";

const UserNav = () => {
  const [loading, setLoading] = useState(false);
  var history = useHistory();

  const userNav = () => {
    const signOutAndRedirect = () => {
      Cookies.remove("jwt", { path: "/" });
      setLoading(true);
      setTimeout(() => {
        history.push("/");
        window.location.reload();
        signout().then((response) => {
          console.log("Signed Out");
        });
      }, 2000);
      clearTimeout();
    };

    const style = {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    };

    const loadingMessage = () => {
      return (
        loading && (
          <Fragment>
            {" "}
            <div style={style}>
              <RotateSpinner size={45} color="#00ff89" loading={true} />
            </div>
          </Fragment>
        )
      );
    };

    const handleActiveLinks = () => {};

    return (
      <div>
        <GlobalNavbar>
          <nav className="navi-bar">
            <h2>
              <Link to="/" className="logo">
                &rarr; <span style={{ fontSize: "4rem" }}> C</span> rispInfo
                &larr;
              </Link>
            </h2>
            <ul className="navi-navi-links">
              <li className="navi-links">
                <NavLink
                  to="/allPosts"
                  onClick={handleActiveLinks}
                  activeClassName="active"
                >
                  Blog
                </NavLink>
              </li>
              <li className="navi-links">
                <NavLink
                  to="/categories"
                  onClick={handleActiveLinks}
                  activeClassName="active"
                >
                  Categories
                </NavLink>
              </li>
              <li className="navi-links">
                <NavLink
                  to="/about"
                  onClick={handleActiveLinks}
                  activeClassName="active"
                >
                  About
                </NavLink>
              </li>
              {loadingMessage()}
              {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="navi-links">
                  <Link to="/admin">AdminSpace</Link>
                </li>
              )}

              {isAuthenticated() && (
                <li className=" cta-signout" onClick={signOutAndRedirect}>
                  <span className="navi-links">Signout</span>
                </li>
              )}
            </ul>
          </nav>
        </GlobalNavbar>
      </div>
    );
  };

  return <div>{userNav()}</div>;
};
export default withRouter(UserNav);
