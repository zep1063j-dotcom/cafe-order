import { Link } from "react-router";

// 메뉴 카드 하나 — 「자세히」는 그 메뉴의 페이지(/menu/번호)로 갑니다
function MenuCard({ id, name, price, desc = "오늘의 메뉴", onAdd }) {
  return (
    <article className="menu-card">
      <h3>{name}</h3>
      <p className="price">{price}원</p>
      <p className="desc">{desc}</p>
      <button type="button" onClick={onAdd}>
        담기
      </button>{" "}
      <Link to={`/menu/${id}`}>자세히</Link>
    </article>
  );
}

export default MenuCard;
