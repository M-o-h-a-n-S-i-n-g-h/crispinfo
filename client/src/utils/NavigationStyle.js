import styled from "styled-components";
import { logoFont, typeScale, yellow } from "../utils";
import {
  topHeaderFont,
  descFont,
  cardHeader,
  paragraphFont,
} from "./typography";

export const GlobalNavbar = styled.div`
  .navi-bar {
    width: 100%;
    height: 5%;
  }

  ul {
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    list-style: none;
    padding: 3rem, 2rem, 2rem;
    text-decoration: none;
    border: solid 1px white;
    box-shadow: 5px 5px whitesmoke;
  }

  .navi-bar {
    display: grid;
    grid-template-columns: repeat(1fr);
  }

  h2 {
    display: grid;
    justify-items: center;
  }

  .navi-links {
    list-style: none;
    display: grid;
    align-items: start;
    align-content: center;
    padding: 1em;
    padding-top: 0.5em;
    font-size: 24px;
  }

  .navi-links a {
    color: #fbf9ff;
    font-family: ${paragraphFont};
    font-weight: 300;
  }

  .navi-links a:hover {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }

  .cta {
    border: none;
    border-radius: 50px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
  }

  .cta:hover {
    color: #03dac6;
    text-decoration: none;
  }

  .cta1 {
    border: none;
    border-radius: 50px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
  }

  .cta1:hover {
    color: #03dac6;
    text-decoration: none;
  }

  .logo {
    font-weight: 900;
    font-family: ${topHeaderFont};
    text-transform: uppercase;
    font-size: ${typeScale.header3};
    color: #ffcf00;
    justify-content: flex-start;
    padding-top: 0;
    padding-bottom: 0.7em;
    text-decoration: none;
  }

  .logo:hover {
    text-decoration: none;
    color: cyan;
  }

  .cta-signout {
    display: flex;
    cursor: pointer;
    color: white;
  }

  .active {
    border-bottom: solid 2px yellow;
    color: yellow;
  }

  .cta-signout:hover {
    cursor: pointer;
    color: black;
    border: none;
    border-radius: 10px;
    background-color: cyan;
  }

  @media only screen and (max-width: 768px) {
    .navi-links > li {
      display: inline;
      padding: 1%;
      float: none;
    }

    .header {
      margin-bottom: 2em;
      text-align: left;
    }

    ul {
      width: 90%;
      border: solid 1px whitesmoke;
      box-shadow: 3px 3px white;
      margin-bottom: 2em;
      padding: 0.4em;
    }
    .logo {
      margin: 0;
      font-size: ${typeScale.mobileLogo};
      padding-top: 0.2em;
      padding-bottom: 0.6em;
    }
  }
`;
