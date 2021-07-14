import styled from "styled-components";

export const Wrapper = styled.header`
  position: relative;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #eee;
`;

export const TopHeader = styled.div`
  width: 90%;
  max-width: 1060px;
  height: 100%;
  display: flex;
  margin: 0 auto;
`;

export const Logo = styled.h1`
  height: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.ul`
  height: 100%;
  margin: 0 auto;
`;

export const Item = styled.li`
  padding: 0 20px;
  height: 100%;
  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
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
  width: ${({ isAvatar }) => (isAvatar ? "30px" : "18px")};
  height: ${({ isAvatar }) => (isAvatar ? "30px" : "18px")};
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  margin-right: ${({ isAvatar }) => (isAvatar ? "10px" : 0)};
  > img {
    width: 100%;
  }
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
`;

export const CompanyBtn = styled.a`
  display: inline-block;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  margin-left: 20px;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #ddd;
    height: 10px;
    width: 1px;
  }
`;

export const Explore = styled.div`
  width: 90%;
  max-width: 1060px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 40px auto;
`;

export const ClosedItems = styled.div`
  a {
    display: block;
    padding: 10px 0;
  }
`;

export const Arrow = styled.img``;
