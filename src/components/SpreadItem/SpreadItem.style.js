import styled from "styled-components";

export const Wrapper = styled.div``;

export const Title = styled.a`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  cursor: pointer;

  h2 {
    font-weight: 600;
  }
`;

export const Arrow = styled.img``;

export const List = styled.ul`
  width: 100%;
`;

export const Item = styled.li`
  display: block;
  width: 100%;
  padding: 5px 0;
  font-weight: 500;
  cursor: pointer;

  a {
    display: block;
    color: ${({ theme }) => theme.color.grayDeep};
  }
`;

export const More = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  cursor: pointer;
  font-weight: 500;

  a {
    color: ${({ theme }) => theme.color.grayDeep};
  }
`;
