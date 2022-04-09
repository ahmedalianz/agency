import styled from "styled-components";

export const Container = styled.div`
  height: 10%;
  background-color: #111;
  color: lightgray;
`;

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Copyright = styled.span`
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
