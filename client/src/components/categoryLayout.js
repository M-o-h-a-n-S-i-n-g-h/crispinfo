import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { CategoryStyle, cardHeader } from "../utils";
import styled from "styled-components";

const Header4 = styled.div`
  text-align: center;
  font-weight: 500;
  a {
    color: white;
    font-size: 27px;
    text-decoration: none;
    font-family: ${cardHeader};
  }

  a:hover {
    text-decoration: none;
    color: cyan;
  }
`;

const CategoryLayout = ({ category }) => {
  const categoryTitle = category ? category.name : "Category Title";
  return (
    <Fragment>
      <CategoryStyle>
        <div className="gridcard">
          <Header4>
            <Link to={`/category/${category._id}/posts`}>{categoryTitle}</Link>
          </Header4>
        </div>
      </CategoryStyle>
    </Fragment>
  );
};

export default CategoryLayout;
