import React from "react";
import bell from "../../assets/bell.svg";
import mGlass from "../../assets/magnifying-glass.svg";
import user from "../../assets/user-img.png";
import menu from "../../assets/menu.svg";
import { spreadData, closedData } from "../../menuData";
import SpreadItem from "../SpreadItem/SpreadItem";
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
  ClosedItems,
  ExploreWrapper,
} from "./Header.style";
import ClosedItem from "../ClosedItem";
import { useMediaQuery } from "react-responsive";
import { size } from "../../style/theme";

const Header = ({ activeExplore, setActiveExplore }) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${size.mobile})` });

  const checkAndFalseActive = (e) => {
    // 메뉴가 explore일 때는 active상태 유지
    if (
      e.target.classList.contains("explore") ||
      e.target.parentNode.classList.contains("explore")
    ) {
      return;
    }
    setActiveExplore(false);
  };

  return (
    <Wrapper>
      <TopHeader onMouseOver={(e) => checkAndFalseActive(e)}>
        <Menu>
          {isMobile ? (
            <>
              <Item>
                <a>홈</a>
              </Item>
              <Item>
                <a>탐색</a>
              </Item>
              <Item>
                <a>커리어 성장</a>
              </Item>
            </>
          ) : (
            <>
              <Logo>wanted</Logo>
              <Item
                className="explore"
                onMouseOver={() => setActiveExplore(true)}
              >
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
            </>
          )}
        </Menu>
        <Aside>
          <Icons>
            <Icon>
              <img src={mGlass} alt="search" />
            </Icon>
            <Icon isNew={true}>
              <img src={bell} alt="notification" />
            </Icon>
            {isMobile ? (
              <Icon>
                <img src={menu} alt="menu" />
              </Icon>
            ) : (
              <Icon isAvatar={true} isNew={true}>
                <Avatar>
                  <img src={user} alt="user profile" />
                </Avatar>
              </Icon>
            )}
          </Icons>
          {!isMobile && <CompanyBtn>기업 서비스</CompanyBtn>}
        </Aside>
      </TopHeader>
      <ExploreWrapper isActive={activeExplore} className="exxxxxx">
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
      </ExploreWrapper>
    </Wrapper>
  );
};

export default Header;
