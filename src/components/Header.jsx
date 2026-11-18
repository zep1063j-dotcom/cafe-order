import { NavLink } from "react-router";

// 메뉴 링크 — [&.active]:는 NavLink가 지금 주소의 링크에 붙이는 active 클래스가 있을 때만
const navClass =
  "rounded-full px-3 py-1.5 text-stone-600 hover:bg-stone-100 " +
  "[&.active]:bg-amber-100 [&.active]:text-amber-900";

// 머리말 — 가게 이름과 메뉴 · 장바구니로 가는 링크
function Header({ count }) {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <h1 className="text-2xl font-bold text-amber-800">오즈 카페</h1>
        <nav className="flex items-center gap-1 text-sm font-medium">
          <NavLink to="/" end className={navClass}>
            메뉴
          </NavLink>
          <NavLink to="/cart" className={navClass}>
            장바구니 {count}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
