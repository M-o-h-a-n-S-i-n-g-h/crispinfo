import React from "react";
import UserNav from "./UserNav";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { quoteFont } from "../utils/index";

const AboutDiv = styled.div`
  padding: 1em;
  text-align: center;
  background: black;
  width: 100%;
  border: solid white 2px;
  border-left: yellow 5px groove;
  border-top: yellow 5px groove;
  box-shadow: 4px 4px #b4e7ce;
  margin-bottom: 3em;

  h1 {
    padding: 1rem;
    font-size: 3em;
    color: #ecebf3;
  }

  h4 {
    width: 80%;
    margin: auto;
    color: grey;
    padding: 1em;
    font-size: 2em;
    border: solid 1px white;
    box-shadow: 3px 3px white;
    margin-top: 1em;
    border-left: yellow 5px groove;
    margin-bottom: 1em;
    font-family: ${quoteFont};
  }
`;

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <UserNav />
      <main>
        <h1>About Us</h1>
        <AboutDiv>
          <h1>About Crispinfo</h1>
          <h4>
            Crispinfo is made with love of creating super simple short and vital
            information of topics that are otherwise very clustered and dense
            for eyes to read...
          </h4>
        </AboutDiv>
        <AboutDiv>
          <h1>About Me</h1>
          <h4>
            Hey there I'm <strong>Mohan Singh</strong> ,I love web developement
            ,building web applications and creating content
          </h4>
        </AboutDiv>
      </main>
    </div>
  );
};

export default About;
