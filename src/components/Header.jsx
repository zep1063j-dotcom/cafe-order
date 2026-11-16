import { NavLink } from "react-router";

// 머리말 — 가게 이름과 메뉴 · 장바구니로 가는 링크
function Header({ count }) {
  return (
    <header className="site-header">
      <h1>오즈 카페</h1>
      <nav>
        <NavLink to="/" end>
          메뉴
        </NavLink>
        <NavLink to="/cart">장바구니 {count}</NavLink>
      </nav>
    </header>
  );
}

export default Header;
