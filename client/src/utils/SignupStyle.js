import styled from "styled-components";
import { topHeaderFont } from "./typography";

export const GlobalSignup = styled.div`
  h1 {
    font-family: ${topHeaderFont};
    margin-top: 1em;
    color: white;
  }
`;

export const Form = styled.form`
  width: 60%;
  margin: auto;
  padding-top: 0%;
  padding: auto;
`;

export const Button = styled.button`
  margin-top: 1em;
  width: 100%;
`;

export const Label = styled.label`
  color: white;
`;
