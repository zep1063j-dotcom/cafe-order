// 메뉴 카드 하나 — 「담기」를 누르면 props로 받은 함수(onAdd)를 불러 App에 알립니다
function MenuCard({ name, price, desc = "오늘의 메뉴", onAdd }) {
  return (
    <article className="menu-card">
      <h3>{name}</h3>
      <p className="price">{price}원</p>
      <p className="desc">{desc}</p>
      <button type="button" onClick={TODO 6}>
        담기
      </button>
    </article>
  );
}

export default MenuCard;
