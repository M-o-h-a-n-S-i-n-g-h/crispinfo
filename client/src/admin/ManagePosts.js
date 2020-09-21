import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Base from "../Core/Base";
import { getAllPosts, deletePost } from "../apicalls";

const ManagePosts = ({ history }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    preLoad();
  }, []);

  const preLoad = () => {
    getAllPosts()
      .then((data) => {
        if (data) {
          setPosts(data);
        } else {
          console.log("ERROR FETCHING POSTS");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const managePostsForm = () => {
    const deleteBlogPost = (id) => {
      deletePost(id).then((response) => {
        console.log("Successfully deleted");
      });
      const timeOut = setTimeout(() => {
        console.log("This function ran");
        history.push("/allPosts");
      }, 1000);
      return () => clearTimeout(timeOut);
    };

    return (
      <div>
        <div>
          {" "}
          <Link to="/admin" className="btn btn-success mb-3">
            Home
          </Link>
        </div>
        {posts.map((post, index) => {
          return (
            <div className="row mb-3" key={index}>
              <h4 className="col-4">{post.title}</h4>
              <Link className="col-4 " to={`/update/post/${post._id} `}>
                <span className="btn btn-info">Update Post</span>
              </Link>
              <Link className="col-4" to="#">
                {" "}
                <span
                  className="btn btn-danger"
                  onClick={() => deleteBlogPost(post._id)}
                >
                  Delete Post
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Base title="Manage Posts" description="Updating and Deleting Posts">
      <div>{managePostsForm()}</div>
    </Base>
  );
};

export default ManagePosts;
