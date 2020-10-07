import React from "react";
import styled from "styled-components";
import UserNav from "./UserNav";
import { yellow, quoteFont, descFont } from "../utils/index";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Main = styled.main`
  width: 95%;
  margin: auto;
`;

const HeroDiv = styled.div`
  text-align: center;
  margin-top: 2.5em;
  width: 100%;
  background: #181c22;
  border-radius: 3px;
  border: 2px solid white;
  padding: 2em;
  box-shadow: 5px 5px #f6f4f3;

  h2 {
    color: white;
  }

  h3 {
    color: #d3ffe9;
    font-size: 3em;
    margin-bottom: 0.5em;
    font-family: ${quoteFont};
  }

  h1 {
    font-size: 5rem;
    color: #d3ffe9;
  }

  h4 {
    color: grey;
    font-size: 2em;
    font-family: ${quoteFont};
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    h1 {
      font-size: 2.6rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h4 {
      font-size: 1.5em;
    }

    h3 {
      color: #d3ffe9;
      font-size: 1.6em;
      margin-bottom: 0.5em;
    }

    .quote1 {
      font-family: ${quoteFont};
    }
  }
`;

const Span = styled.span`
  color: #32e875;
  font-size: 1.5em;
  font-family: ${descFont};
`;

const Button = styled.button`
  padding: 0.5em;
  background: black;
  border: white solid 1px;
  color: ${yellow[100]};
  border-radius: 3px;
  margin-top: 2em;
  font-size: 20px;
  font-weight: 800;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 17px;
    font-weight: 400;
    margin-top: 1em;
    margin-bottom: 2em;
  }
`;

const ButtonSection = styled.div`
  text-align: center;
  margin-bottom: 1em;
  padding: 2em;
  button {
    display: inline-block;
    margin-left: 3em;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    text-align: center;
    margin-bottom: 2em;
    button {
      display: grid;
      margin: auto;
    }
  }
`;

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>CrispInfo - Simplify the stuff</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="It is all about simplifying stuff you read here and getting a better understanding of it"
        />
      </Helmet>
      <UserNav />
      <Main>
        <HeroDiv>
          <h1>SIMPLIFYING IS EVERYTHING</h1>
          <h4 className="quote1">
            " Know the vital facts of a topic which is written short and sweet
            for you "
          </h4>
        </HeroDiv>
        <HeroDiv>
          <h3>
            If u can't explain it to a six year old , you don't understand it
            yourself
          </h3>
          <Span className="quote-author"> --- "Albert Einstein" ---</Span>
        </HeroDiv>
        <ButtonSection>
          <Link to="/allPosts">
            <Button>Visit Topics &rarr;</Button>
          </Link>
          <Link to="/categories">
            <Button>Browse By Categories &rarr;</Button>
          </Link>
        </ButtonSection>
      </Main>
    </div>
  );
};

export default HomePage;
