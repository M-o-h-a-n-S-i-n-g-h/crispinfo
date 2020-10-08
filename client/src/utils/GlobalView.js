import styled from "styled-components";
import { topHeaderFont, paragraphFont, typeScale } from "./typography";

//!repeat(auto-fit, minmax(450px, 1fr));

export const ViewDiv = styled.div`
  width: 76%;
  margin: auto;

  h1 {
    font-family: ${topHeaderFont};
    color: white;
  }

  header {
    width: 100%;
  }

  h2 {
    font-family: "Recursive", sans-serif;
    font-size: ${typeScale.header3};
    color: #f038ff;
  }

  span {
    display: block;
    text-align: center;
    font-family: ${topHeaderFont};
    font-size: ${typeScale.header1};
    color: #f7f7ff;
    padding: 0.8em;
    width: 90%;
    margin: auto;
  }

  p {
    font-family: ${paragraphFont};
    color: white;
    font-size: ${typeScale.paragraph};
    font-weight: 500;
  }

  blockquote {
    border-left: 10px solid purple;
    color: black;
    border: solid 2px white;
    margin-bottom: 2rem;
    border-radius: 6px;
    padding: 2em;
    -webkit-box-shadow: 16px 17px 0px 0px white;
    -moz-box-shadow: 16px 17px 0px 0px white;
    box-shadow: 0 4px 8px 0 rgb(241, 229, 229);
  }

  blockquote p {
    color: #e1e1e1;
    font-size: ${typeScale.paragraph};
  }
  .content-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5em;
  }

  .content {
    margin-top: 5em;
  }

  //! MEDIA QUERIES

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 90%;
    margin: auto;

    main {
      width: 100%;
      padding: 0.7em;
      margin: auto;
    }

    span {
      display: block;
      width: 100%;
      font-size: ${typeScale.mobileSpan};
      color: #e1e1e1;
      margin-top: 0.1em;
      padding: 0.3em;
      text-align: center;
    }
    h2 {
      font-size: ${typeScale.header5};
    }

    blockquote {
      padding: 0.7em;
      border-radius: 4px;
      border: solid 2px #e1e1e1;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      box-shadow: 0 4px 8px 0 rgb(241, 229, 200);
    }

    blockquote p {
      color: #e1e1e1;
    }

    .content-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2em;
      width: 100%;
      margin-bottom: 0.5em;
    }
  }
`;
