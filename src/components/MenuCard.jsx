// 메뉴 카드 하나 — 이름 · 가격 · 설명을 props로 받습니다
function MenuCard({ name, price, desc = "오늘의 메뉴" }) {
  return (
    <article TODO 1="menu-card">
      <h3>{TODO 2}</h3>
      <p className="price">{TODO 3}원</p>
      <p className="desc">{desc}</p>
    </article>
  );
}

export TODO 4 MenuCard;
