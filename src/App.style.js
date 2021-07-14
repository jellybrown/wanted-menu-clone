import styled from "styled-components";

export const Content = styled.div`
  height: 100vh;

  background-color: ${({ isActive }) =>
    isActive ? "rgba(0,0,0,0.8)" : "none"};
  transition: ${({ isActive }) => (isActive ? "0.8s" : "0")};
  p {
    font-size: 20px;
  }
`;
