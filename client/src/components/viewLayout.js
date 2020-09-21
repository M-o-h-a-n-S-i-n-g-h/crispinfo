import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import UserNav from "../Core/UserNav";
import ReactMarkdown from "react-markdown";
import { ViewDiv } from "../utils";
import { Helmet } from "react-helmet";
import Loading from "./customComponents/LoadingComponent";
const { getPostById } = require("../apicalls/index");

const AnimationFloat = styled.div`
  // !ANIMATIONS
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    60% {
      opacity: 1;
      transition: all ease 0.3s 0s;
      transform: translateX(-5px);
    }
    100% {
      opacity: 1;
      transition: all ease-in 0.5s 0s;
      transform: translateX(1);
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transition: all 0.5s ease 0s;
    }
  }

  @keyframes slideUp {
    0% {
      opacity: 0;
    }
    60% {
      opacity: 1;
      transform: translateY(-5px);
    }
    100% {
      opacity: 1;
      transform: translateY(1);
      transition: all 0.3s cubic-bezier(0, 0, 0, 1.08) 0s;
    }
  }

  span {
    animation: fadeIn 0.5s;
    animation-duration: 0.8s;
    animation-timing-function: ease;
  }

  .content-grid {
    animation: fade 0.3s;
    animation-duration: 1s;
    animation-timing-function: ease;
  }

  .content-grid > h2,
  blockquote {
    animation: slideUp 0.3s;
    animation-duration: 0.8s;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      60% {
        opacity: 1;
      }
      100% {
        opacity: 1;
        transition: all ease 0.3s 0s;
        transform: translateX(1);
      }
    }

    @keyframes fade {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
        transition: all 0.3s ease 0s;
      }
    }

    @keyframes slideUp {
      0% {
        opacity: 0;
      }
      60% {
        opacity: 1;
        transform: translateY(-5px);
      }
      100% {
        opacity: 1;
        transform: translateY(1);
        transition: all 0.3s ease 0s;
      }
    }

    span {
      animation: fadeIn 0.3s;
      animation-duration: 0.8s;
      animation-timing-function: ease;
    }

    .content-grid {
      animation: fade 0.3s;
      animation-duration: 1s;
      animation-timing-function: ease;
    }

    .content-grid > h2,
    blockquote {
      animation: slideUp 0.3s;
      animation-duration: 0.8s;
    }
  }
`;

const ViewLayout = (props) => {
  useEffect(() => {
    loadPost();
  }, [props.match.params.id]);

  const [blog, setBlog] = useState({
    title: "",
    author: "",
    description: "",
    markdown: "",
  });

  const [loading, setLoading] = useState(true);

  const loadingMessage = () => {
    return loading && <Loading />;
  };

  const loadPost = async () => {
    await getPostById(props.match.params.id).then((data) => {
      if (data) {
        setBlog({
          title: data.title,
          author: data.author,
          description: data.description,
          markdown: data.markdown,
        });
        setLoading(false);
      } else {
        console.log("FAILED CHECK FOR ERROR");
      }
    });
  };

  const blogTitle = blog ? blog.title : "BlogTitle";
  const blogContent = blog ? blog.markdown : "BlogTitle";
  const blogDescription = blog ? blog.description : "Blog Description";

  return (
    <div>
      <Helmet>
        <title>{blogTitle}</title>
        <meta name="description" content={blogDescription} />
      </Helmet>
      <UserNav />
      <Fragment>
        <AnimationFloat>
          <ViewDiv>
            <span>{blogTitle}</span>
            <hr className="underline" />
            {loadingMessage()}
            <main>
              <div className="content-grid">
                <ReactMarkdown source={blogContent} escapeHtml={false} />
              </div>
            </main>
          </ViewDiv>
        </AnimationFloat>
      </Fragment>
    </div>
  );
};

export default ViewLayout;
