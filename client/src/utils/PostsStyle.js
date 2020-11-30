import styled from "styled-components";
import { cardHeader, typeScale, descFont } from "./typography";

export const PostStyle = styled.div`
  .grid-card {
    cursor: pointer;
    background-color: #171123;
    padding: 0.56em;
    width: 100%;
    margin: auto;
    box-shadow: 0 4px 8px 0 rgb(150, 150, 150);
    border: solid 2px whitesmoke;
    border-radius: 4px;
    min-height: auto;
    transition: all ease 0.5s 0s;
  }

  .grid-card:hover {
    transform: translate(0, -5px);
    transition: all 0.3s ease 0s;
  }

  .grid-card h3 {
    font-variation-settings: "slnt" -10, "CASL" 0;
    text-align: center;
    font-family: ${cardHeader};
    margin-top: -0.5em;
    display: block;
  }

  .grid-card h4::hover {
    text-decoration: none;
  }

  .content {
    padding: 1em;
  }
  .grid-container {
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3em;
    margin-top: -0.7em;
    padding-bottom: 5em;
  }

  .card-title {
    color: #f2f230;
    font-size: ${typeScale.cardHeading};
    padding: 0.6em;
  }

  .card-description {
    font-size: 1.5em;
    display: block;
    text-align: center;
    width: 90%;
    padding: 0.5em;
    margin: auto;
    margin-top: -0.5em;
    color: #dbd3ad;
    font-weight: 100;
    font-family: ${descFont};
  }

  //! MEDIA QUERIES

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .grid-card {
      min-height: auto;
      border-radius: 3px;
      padding: 0.7em;
      box-shadow: 0 4px 8px 0 rgb(100, 100, 100);
    }

    .card-title {
      padding: 0.3em;
      text-align: center;
      font-family: ${cardHeader};
      color: #dfa612;
      font-size: ${typeScale.mobileCardHeader};
      font-weight: 600;
    }

    .grid-card h4::hover {
      text-decoration: none;
    }

    .grid-container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2em;
      margin-bottom: 3em;
      margin-top: 4em;
    }

    .mobile-grid {
      width: 90%;
      margin: auto;
    }
    .card-description {
      width: 100%;
      padding: 0.3em;
      text-align: center;
      display: block;
      font-size: ${typeScale.mobileCardDescription};
      font-weight: 400;
    }
  }
`;
