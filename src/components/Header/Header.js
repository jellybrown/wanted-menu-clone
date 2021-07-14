import React from "react";
import bell from "../../assets/bell.svg";
import mGlass from "../../assets/magnifying-glass.svg";
import user from "../../assets/user-img.png";
import { exploreData } from "../../menuData";
import ExploreItem from "../ExploreItem/ExploreItem";
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
        {exploreData.map((data) => (
          <ExploreItem key={data.id} data={data} />
        ))}
        <ClosedItems>
          <a>
            <h2>엔지니어링 설계</h2>
            <Arrow src={nextArrow} width="18px" alt="more" />
          </a>
          <a>
            <h2>물류·무역</h2>
            <Arrow src={nextArrow} width="18px" alt="more" />
          </a>
          <a>
            <h2>제조·생산</h2>
            <Arrow src={nextArrow} width="18px" alt="more" />
          </a>
          <a>
            <h2>의료·제약·바이오</h2>
            <Arrow src={nextArrow} width="18px" alt="more" />
          </a>
          <a>
            <h2>교육</h2>
            <Arrow src={nextArrow} width="18px" alt="more" />
          </a>
          <a>
            <h2>법률·법집행기관</h2>
            <Arrow src={nextArrow} width="18px" alt="more" />
          </a>
          <a>
            <h2>식·음료</h2>
            <Arrow src={nextArrow} width="18px" alt="more" />
          </a>
          <a>
            <h2>건설·시설</h2>
            <Arrow src={nextArrow} width="18px" alt="more" />
          </a>
          <a>
            <h2>공공·복지</h2>
            <Arrow src={nextArrow} width="18px" alt="more" />
          </a>
        </ClosedItems>
      </Explore>
    </Wrapper>
  );
};

export default Header;
