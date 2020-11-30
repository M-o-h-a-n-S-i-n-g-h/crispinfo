import React from "react";
import UserNav from "./UserNav";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { quoteFont } from "../utils/index";

const AboutDiv = styled.div`
  padding: 0.5em;
  text-align: center;
  background: black;
  width: 100%;
  border: solid white 2px;
  border-left: yellow 5px groove;
  border-top: yellow 5px groove;
  box-shadow: 4px 4px #b4e7ce;
  margin-top: 2em;

  h1 {
    padding: 1rem;
    font-size: 3em;
    color: #ecebf3;
  }

  h4 {
    width: 80%;
    margin: auto;
    color: grey;
    padding: 0.5em;
    font-size: 1.8em;
    border: solid 1px white;
    box-shadow: 3px 3px white;
    margin-top: 1em;
    border-left: #91912f 5px groove;
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
            Hey there I'm <strong>Shibin Raj</strong> a student who's a
            Chemistry fanatic . Here is a glimpse of my diet which I had for
            chemistry ! Reaching a height of chemical (molecular) machineman is
            my ultimate goal....
          </h4>
        </AboutDiv>
      </main>
    </div>
  );
};

export default About;
