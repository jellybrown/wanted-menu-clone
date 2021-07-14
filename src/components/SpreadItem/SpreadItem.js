import React from "react";
import nextArrow from "../../assets/next-arrow.svg";
import { Arrow, Item, List, Title, Wrapper } from "./SpreadItem.style";

const SpreadItem = ({ data }) => {
  return (
    <Wrapper>
      <Title>
        <h2>{data.title}</h2>
        <Arrow src={nextArrow} width="18px" alt="more" />
      </Title>
      <List>
        {data &&
          data.menu.map((item) => (
            <Item>
              <a>{item}</a>
            </Item>
          ))}
        <li>
          <a>더보기</a>
          <Arrow src={nextArrow} width="14px" alt="more" />
        </li>
      </List>
    </Wrapper>
  );
};

export default SpreadItem;
