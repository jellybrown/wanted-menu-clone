import React from "react";
import nextArrow from "../../assets/next-arrow.svg";
import { Arrow, Item, List, More, Title, Wrapper } from "./SpreadItem.style";

const SpreadItem = ({ data }) => {
  return (
    <Wrapper>
      <Title>
        <h2>{data.title}</h2>
        <Arrow src={nextArrow} width="12px" alt="more" />
      </Title>
      <List>
        {data &&
          data.menu.map((item) => (
            <Item>
              <a>{item}</a>
            </Item>
          ))}
        <More>
          <a>더보기</a>
          <Arrow src={nextArrow} width="12px" alt="more" />
        </More>
      </List>
    </Wrapper>
  );
};

export default SpreadItem;
