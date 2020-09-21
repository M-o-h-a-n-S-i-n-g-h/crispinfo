import React from "react";
import styled from "styled-components";
import { ClapSpinner } from "react-spinners-kit";

const LoadingStyle = styled.div`
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: center;
    margin-top: 25%;
  }
`;

const Loading = () => {
  return (
    <div>
      <LoadingStyle>
        <h2>
          <ClapSpinner loading={true} size={40} color="#fa26a0" />
        </h2>
      </LoadingStyle>
    </div>
  );
};

export default Loading;
