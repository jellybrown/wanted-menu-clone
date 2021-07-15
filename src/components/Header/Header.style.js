import styled from "styled-components";
import nIcon from "../../assets/n.svg";

export const Wrapper = styled.header`
  position: relative;
  height: 50px;
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.color.grayLight}`};
`;

export const TopHeader = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  margin: 0 auto;

  @media ${({ theme }) => theme.mobile} {
    width: 97%;
  }
`;

export const Logo = styled.h1`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Menu = styled.ul`
  height: 100%;
  margin: 0 auto;

  @media ${({ theme }) => theme.mobile} {
    flex: 1;
  }
`;

export const Item = styled.li`
  padding: 0 20px;
  height: 100%;
  position: relative;

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    font-weight: 600;
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.blueLine};
    opacity: 0;
  }

  &:hover {
    &:after {
      opacity: 1;
    }
  }

  @media ${({ theme }) => theme.tablet} {
    padding: 0 12px;
    font-size: 13px;
    &:hover {
      &:after {
        opacity: 0;
      }
    }
  }

  @media ${({ theme }) => theme.mobile} {
    padding: 0 12px;
    font-size: 13px;
  }
`;

export const Aside = styled.aside`
  height: 50px;
  display: flex;
  align-items: center;
`;

export const Icons = styled.div`
  height: 100%;
  display: inline-flex;
  align-items: center;
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 5px;
  margin-right: ${({ isAvatar }) => (isAvatar ? "14px" : 0)};
  position: relative;
  > img {
    width: 18px;
    height: 18px;
  }
  &:after {
    position: absolute;
    content: "";
    right: 0px;
    top: -5px;
    width: 14px;
    height: 13px;
    background-color: ${({ isNew, theme }) =>
      isNew ? theme.color.blue : "none"};
    background-image: ${({ isNew }) => (isNew ? `url("${nIcon}")` : "none")};
    background-size: 5px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 5px;
  }
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border: ${({ theme }) => `1px solid ${theme.color.grayNormal}`};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  > img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
`;

export const CompanyBtn = styled.a`
  display: inline-block;
  border: ${({ theme }) => `1px solid ${theme.color.grayNormal}`};
  color: ${({ theme }) => theme.color.grayDeep};
  font-size: 13px;
  font-weight: 600;
  border-radius: 15px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  margin-left: 20px;
  position: relative;
  cursor: pointer;

  &:before {
    position: absolute;
    content: "";
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.color.grayNormal};
    height: 10px;
    width: 1px;
  }
`;

export const ExploreWrapper = styled.div`
  width: 100%;
  background-color: white;
  visibility: ${({ isActive }) => (isActive ? "visible" : "hiden")};
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  height: ${({ isActive }) => (isActive ? "480px" : "0")};
  transition: ${({ isActive }) => (isActive ? "0.3s" : "0")};
`;

export const Explore = styled.div`
  width: 90%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 20px;
  padding: 40px 0;
  margin: 0 auto;
`;

export const ClosedItems = styled.div``;

export const Arrow = styled.img``;

/* mobile nav */
export const MobileNav = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 120vh;
  padding: 20px;
  background-color: white;
  box-sizing: border-box;
  overflow: hidden;
  visibility: ${({ isOpened }) => (isOpened ? "visible" : "hidden")};
  opacity: ${({ isOpened }) => (isOpened ? "1" : "0")};
`;
export const MobileTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Close = styled.img`
  cursor: pointer;
`;

export const MobileMenu = styled.ul`
  width: 100%;
  height: 100%;
  margin-top: 40px;
`;

export const MobileItem = styled.li`
  display: block;
  position: relative;

  a {
    font-size: 20px;
    cursor: pointer;
    display: block;
    padding: 15px 0;
    position: relative;
    margin-top: ${({ isTopLine }) => (isTopLine ? "20px" : 0)};

    &:before {
      position: absolute;
      content: "";
      left: 0;
      top: -10px;
      width: 100%;
      height: ${({ isTopLine }) => (isTopLine ? "1px" : 0)};
      background-color: ${({ theme }) => theme.color.grayLight};
    }
  }

  &:last-child a {
    color: ${({ theme }) => theme.color.grayDeep};
  }
`;

export const MobileAvtar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;
