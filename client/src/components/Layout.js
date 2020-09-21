import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { PostStyle } from "../utils";

const Layout = ({ post }) => {
  var postTitle = post ? post.title : "";
  var postId = post ? post._id : "";
  var postDescription = post ? post.description : "";

  return (
    <Fragment>
      <Link to={`/blog/${postId}`} className="card-link">
        <PostStyle>
          <div className="grid-card">
            <h3 className="card-title">{postTitle}</h3>
            <h4 className="card-description ">{postDescription}</h4>
          </div>
        </PostStyle>
      </Link>
    </Fragment>
  );
};

export default Layout;
