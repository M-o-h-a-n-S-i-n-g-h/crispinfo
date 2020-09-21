import styled from "styled-components";
import { cardHeader, topHeaderFont } from "./typography";

export const FullPageStyle = styled.div`
  h2 {
    display: block;
    text-align: center;
    color: #caf7e2;
    font-weight: 500;
    font-size: 3.5em;
    margin-top: 1em;
    font-family: ${cardHeader};
  }
  main {
    width: 85%;
    margin: auto;
  }

  #logo {
    position: fixed;
    top: 20px;
    left: 20px;
    margin-left: 2em;
    font-weight: 700;
    z-index: 99;
    font-size: 1.9em;
  }

  #logo > a {
    text-decoration: none;
    text-transform: uppercase;
  }

  .strong-logo {
    color: #e0ca3c;
    font-family: ${topHeaderFont};
  }

  .hero {
    width: 100%;
    padding: 3em;
  }

  .section {
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  }

  .welcome {
    font-size: 5em;
  }

  button {
    background: green;
    align-items: center;
    color: black;
    align-self: center;
  }
  .fp-tableCell {
    display: table-cell;
    vertical-align: text-top;
  }

  .table-cell-nav {
    position: fixed;
    top: 1%;
    z-index: 20;
    right: 2%;
    letter-spacing: 3px;
    margin-bottom: 2.5em;
    overflow: hidden;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul > li {
    color: white;
    padding: 1em;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1.1em;
    list-style: none;
  }

  li > a:hover {
    border: none;
  }

  li > a {
    color: whitesmoke;
  }

  .about {
    color: white;
    text-align: center;
    padding: 2em;
    font-size: 3em;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    h2 {
      font-size: 2em;
      margin-bottom: 1.5em;
    }

    .welcome {
      font-size: 3rem;
      text-align: center;
      display: block;
    }

    #logo {
      font-size: 1.3em;
      text-align: center;
      margin-left: 6em;
    }

    ul > li {
      padding: 0.5em;
      font-size: 1.1em;
      letter-spacing: 0px;
    }

    li > a {
      color: whitesmoke;
      padding: 0.5em;
    }

    .table-cell-nav {
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 47%;
      z-index: 10;
      margin: auto;
      right: 25%;
      width: 50%;
      letter-spacing: 0px;
      margin-bottom: 2em;
    }

    .about {
      color: white;
      text-align: center;
      padding: 2em;
    }

    .hero {
      width: 100%;
      padding: 1em;
    }

    .about {
      font-size: 2em;
      width: 100%;
      padding: 0;
      margin-top: 3.5em;
    }
  }
`;
