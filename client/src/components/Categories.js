import React, { useEffect, useState, Fragment } from "react";
import UserNav from "../Core/UserNav";
import { getCategories } from "../apicalls";
import CategoryLayout from "../components/categoryLayout";
import styled from "styled-components";
import Loading from "../components/customComponents/LoadingComponent";
import { topHeaderFont } from "../utils";
import { Helmet } from "react-helmet";

//! STYLES
const CateLayout = styled.div`
  h1 {
    font-family: ${topHeaderFont};
    color: white;
    padding: 1rem;
    text-align: center;
  }

  .grid-container {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(1fr, auto);
    gap: 2em;
    margin-bottom: 3em;

    @media only screen and (max-width: 768px) {
      width: 90%;
    }
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  }
`;

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const categoryLoad = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log("Check for error");
      } else {
        setCategories(data);
        setLoading(false);
      }
    });
  };
  useEffect(() => {
    categoryLoad();
  }, []);

  //!STYLES

  const categoryLoadingMessage = () => {
    return loading && <Loading />;
  };

  return (
    <Fragment>
      <Helmet>
        <title>CrispInfo | Browse Categories</title>
      </Helmet>
      <UserNav />
      <main>
        <h1>Categories Page</h1>
        <hr className="underline" />
        <CateLayout>
          {categoryLoadingMessage()}
          <div className="grid-container">
            {categories.map((category, index) => (
              <div key={index}>
                <CategoryLayout category={category} />
              </div>
            ))}
          </div>
        </CateLayout>
      </main>
    </Fragment>
  );
};

export default React.memo(Categories);
