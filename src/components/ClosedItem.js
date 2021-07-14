import React from "react";
import styled from "styled-components";
import nextArrow from "../assets/next-arrow.svg";

const Wrapper = styled.a`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px 0;
  h2 {
    font-weight: 600;
  }

  &:first-child {
    padding: 0 0 10px 0;
  }
`;

const Arrow = styled.img``;

const ClosedItem = ({ data }) => {
  return (
    <Wrapper>
      <h2>{data.title}</h2>
      <Arrow src={nextArrow} width="12px" alt="more" />
    </Wrapper>
  );
};

export default ClosedItem;
