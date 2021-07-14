import React from "react";
import bell from "../../assets/bell.svg";
import mGlass from "../../assets/magnifying-glass.svg";
import user from "../../assets/user-img.png";
import { spreadData, closedData } from "../../menuData";
import SpreadItem from "../SpreadItem/SpreadItem";
import nextArrow from "../../assets/next-arrow.svg";
import {
  Wrapper,
  Aside,
  Explore,
  Icon,
  Logo,
  Menu,
  Item,
  TopHeader,
  Icons,
  CompanyBtn,
  Avatar,
  Arrow,
  ClosedItems,
} from "./Header.style";

const ClosedItem = ({ data }) => {
  return (
    <a>
      <h2>{data.title}</h2>
      <Arrow src={nextArrow} width="14px" alt="more" />
    </a>
  );
};

const Header = () => {
  return (
    <Wrapper>
      <TopHeader>
        <Logo>wanted</Logo>
        <Menu>
          <Item>
            <a>탐색</a>
          </Item>
          <Item>
            <a>커리어 성장</a>
          </Item>
          <Item>
            <a>직군별 연봉</a>
          </Item>
          <Item>
            <a>이력서</a>
          </Item>
          <Item>
            <a>매치업</a>
          </Item>
          <Item>
            <a>프리랜서</a>
          </Item>
        </Menu>
        <Aside>
          <Icons>
            <Icon>
              <img src={mGlass} alt="search" />
            </Icon>
            <Icon>
              <img src={bell} alt="notification" />
            </Icon>
            <Icon isAvatar={true}>
              <Avatar>
                <img src={user} alt="user profile" />
              </Avatar>
            </Icon>
          </Icons>
          <CompanyBtn>기업 서비스</CompanyBtn>
        </Aside>
      </TopHeader>
      <Explore>
        {spreadData.map((data) => (
          <SpreadItem key={data.id} data={data} />
        ))}
        <ClosedItems>
          {closedData.map((data) => (
            <ClosedItem key={data.id} data={data} />
          ))}
        </ClosedItems>
      </Explore>
    </Wrapper>
  );
};

export default Header;
