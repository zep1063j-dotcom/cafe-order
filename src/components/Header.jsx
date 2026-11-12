// 머리말 — 가게 이름과 담은 메뉴 개수(App에서 props로 받음)
function Header({ count }) {
  return (
    <header className="site-header">
      <h1>오즈 카페</h1>
      <p>담은 메뉴 {count}개</p>
    </header>
  );
}

export default Header;
