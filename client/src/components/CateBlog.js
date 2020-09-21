import React, { useEffect, useState } from "react";
import { getCatePosts } from "../apicalls";
import styled from "styled-components";
import UserNav from "../Core/UserNav";
import Layout from "./Layout";
import { PostStyle } from "../utils";
import { Helmet } from "react-helmet";

const Header1 = styled.h1`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  text-align: center;

  @media only screen and (max-width: 768px) {
    margin-top: -0.5em;
    margin-bottom: 0;
    font-size: 2.5em;
  }
`;

const CateBlog = ({ match }) => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    let mounted = true;
    getCatePosts(match.params.id).then((blogs) => {
      if (mounted) {
        if (blogs.error) {
          console.log("ERROR");
        }
        setPosts(blogs.data);
        setCategory(blogs.category.name);
      }
    });
    return function cleanup() {
      mounted = false;
    };
  }, [match.params.id]);

  return (
    <div>
      <Helmet>
        <title>{category}</title>
      </Helmet>
      <UserNav />
      <main>
        <Header1>{`Posts on ${category}`}</Header1>
        <hr className="underline" />
        <PostStyle>
          <div className="grid-container">
            {posts.map((post, index) => {
              return (
                <div key={index}>
                  <Layout post={post} />
                </div>
              );
            })}
          </div>
        </PostStyle>
      </main>
    </div>
  );
};

export default CateBlog;
