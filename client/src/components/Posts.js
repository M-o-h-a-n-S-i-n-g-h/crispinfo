import React, { useState, useEffect, Fragment } from "react";
import UserNav from "../Core/UserNav";
import { getAllPosts } from "../apicalls/index";
import Layout from "./Layout";
import { PostStyle } from "../utils";
import Loading from "../components/customComponents/LoadingComponent";
import { Helmet } from "react-helmet";

const Posts = () => {
  const [posts, setPosts] = useState([null]);
  const [loading, setLoading] = useState(true);

  const preLoad = () => {
    getAllPosts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setPosts(data);
        setLoading(false);
      }
    });
  };
  useEffect(() => {
    preLoad();
  }, []);

  const postLoadingMessage = () => {
    return loading && <Loading />;
  };

  return (
    <Fragment>
      <Helmet>
        <title>CrispInfo | Posts</title>
      </Helmet>
      <UserNav />
      <main>
        <div className="content">
          <h1>Posts Page</h1>
          <hr className="underline" />
          <PostStyle>
            {postLoadingMessage()}
            <div className="mobile-grid">
              <div className="grid-container">
                {posts.map((post, index) => {
                  return (
                    <div key={index}>
                      <Layout post={post} />
                    </div>
                  );
                })}
              </div>
            </div>
          </PostStyle>
        </div>
      </main>
    </Fragment>
  );
};

export default Posts;
