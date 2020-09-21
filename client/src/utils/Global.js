import { createGlobalStyle } from "styled-components";
import { topHeaderFont, typeScale } from "../utils";

export const Global = createGlobalStyle`

    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
        list-style:none;
        text-decoration:none;
   
    }

    body{
        height:100vh;
        background-color:#0D0C1D;   

    }
    main{
        width:95%;
        margin:auto;
    }

    blockquote ul > li{
      color:white;
      font-size:${typeScale.listFont};
      margin:.4em;
    }

    h1 {
    font-family: ${topHeaderFont};
    color: #f7f7ff;
    padding: 1rem;
    text-align: center;
    font-size:3em;
  }

  h1 {
    @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transition: all ease 0.5s 0s;
    }
  }
  animation: fadeIn 0.5s;
  }

  .underline{
      border:solid 2px #9c88ff;
      width:100%;
      margin:auto;
      margin-top:-.5rem;
      margin-bottom:4em;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px)  {

    h1 {
    font-family: ${topHeaderFont};
    color: #f7f7ff;
    padding: 1rem;
    display:grid;
    justify-items:center;
    align-items:center;
    margin-top:-.5em;
  }

  main{
      width:90%;
      margin:auto;
  }
  }


`;
