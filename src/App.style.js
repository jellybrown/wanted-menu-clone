import styled from "styled-components";

export const Content = styled.div`
  height: 100vh;

  background-color: ${({ isActive }) =>
    isActive ? "rgba(0,0,0,0.8)" : "none"};
  transition: 0.8s;
  p {
    font-size: 20px;
  }
`;
