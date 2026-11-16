import { Link, useParams } from "react-router";
import { menus } from "../data/menus.js";

// 메뉴 하나(/menu/:id) — 주소의 :id로 어떤 메뉴인지 찾습니다
function MenuDetailPage({ onAdd }) {
  const { id } = TODO 5(); // 주소에서 꺼낸 값은 문자열 — "2"
  const menu = menus.find((item) => item.id === TODO 6(id));

  if (!menu) {
    return (
      <section>
        <h2>{id}번 메뉴는 없습니다</h2>
        <Link to="/">메뉴로</Link>
      </section>
    );
  }

  return (
    <article>
      <h2>{menu.name}</h2>
      <p>{menu.category} · {menu.price}원</p>
      <p>{menu.desc}</p>
      <button type="button" onClick={() => onAdd(menu)}>
        담기
      </button>{" "}
      <Link to="/">메뉴로</Link>
    </article>
  );
}

export default MenuDetailPage;
