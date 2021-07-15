# wanted-menu-clone

## 소개

- 채용사이트 wanted의 상단 메뉴 부분을 구현했습니다.

<br>

## 기간

- 2021.07.14 ~ 07.15

<br>

## 사용된 기술, 라이브러리

- React
- styled-component: 중첩 스타일링 및 조건부 스타일링을 위해
- React-responsive: 반응형 구현

<br>

---

## 구현기능

### 1. PC: 2중 슬라이드 메뉴 구현

- PC화면일 경우, 탐색 영역에 마우스오버시 슬라이드 메뉴가 활성화 되도록 했습니다.

```js
// Header.js
// 상단 메뉴중 탐색
<Item className="explore" onMouseOver={() => setActiveExplore(true)}>
  <a href="#a">탐색</a>
</Item>
```

- styled-component의 조건부 스타일링을 이용해서 화면에 나타나도록 했습니다.

```js
// Header.style.js
export const ExploreWrapper = styled.div`
  width: 100%;
  background-color: white;
  visibility: ${({ isActive }) => (isActive ? "visible" : "hiden")};
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  height: ${({ isActive }) => (isActive ? "480px" : "0")};
  transition: ${({ isActive }) => (isActive ? "0.3s" : "0")};
`;
```

```js
// Header.js
// 슬라이드 메뉴는 isActive가 true일 경우 나타남
{
  !isMobile && (
    <ExploreWrapper isActive={activeExplore}>
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
  );
}
```

### 2. mobile: 반응형 메뉴 구현

- 모바일에서는 일부 영역은 사라지게 하고, 모바일에서만 사용될 메뉴를 구현하였습니다.

```js
// Header.js
<MobileNav isOpened={isOpenedMenu}>
  <MobileTop>
    <img src={wantedLogo} alt="wanted logo" width="59px" />
    <Close
      src={close}
      alt="mobile menu close"
      width="26px"
      onClick={onCloseMenu}
    />
  </MobileTop>
  <MobileMenu>
    <MobileItem>
      <a href="#a">MY 원티드</a>
      <MobileAvtar src={user} alt="user profile" />
    </MobileItem>
    <MobileItem>
      <a href="#a">프로필</a>
    </MobileItem>
    // ...
  </MobileMenu>
</MobileNav>
```

<br>

---

## 영상

<img src="https://github.com/jellybrown/wanted-menu-clone/blob/master/wanted-menu.gif" width="800"/>

<br>

## 링크

<a href="https://eloquent-hermann-ddd5d5.netlify.app/">👉 보러가기</a>
