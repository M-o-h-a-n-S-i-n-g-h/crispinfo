import styled from "styled-components";
import { cardHeader, yellow } from "../utils";

export const CategoryStyle = styled.div`
  .gridcard {
    cursor: pointer;
    background-color: #1f1b24;
    padding: 1em;
    width: 100%;
    color: #88c9fb;
    box-shadow: 0 4px 8px 0 rgb(241, 229, 229);
    border: solid 1px whitesmoke;
    border-radius: 8px;
  }

  .grid-card h4 {
    text-decoration: none;
  }

  .grid-card h4:hover {
    text-decoration: none;
  }

  .card-title {
    color: white;
  }

  .card-title:hover {
    color: white;
    text-decoration: none;
  }

  main {
    width: 90%;
    margin: auto;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .grid-card h4 {
      text-align: center;
      font-family: ${cardHeader};
      color: ${yellow[100]};
    }

    .grid-card h4 {
      text-align: center;
      padding: 1em;
    }

    .grid-card h4::hover {
      text-decoration: none;
    }
  }
`;
