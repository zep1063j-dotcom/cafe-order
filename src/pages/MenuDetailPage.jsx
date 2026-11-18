import { Link, useParams } from "react-router";
import { menus } from "../data/menus.js";
import Button from "../components/Button.jsx";

// 메뉴 하나(/menu/:id) — 주소의 :id로 어떤 메뉴인지 찾습니다
function MenuDetailPage({ onAdd }) {
  const { id } = useParams(); // 주소에서 꺼낸 값은 문자열 — "2"
  const menu = menus.find((item) => item.id === Number(id));

  if (!menu) {
    return (
      <section>
        <h2 className="mb-4 text-xl font-bold">{id}번 메뉴는 없습니다</h2>
        <Link to="/" className="text-sm text-stone-600 hover:underline">
          메뉴로
        </Link>
      </section>
    );
  }

  return (
    <article className="max-w-md rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
      <p className="text-sm text-stone-500">{menu.category}</p>
      <h2 className="mt-1 text-2xl font-bold">{menu.name}</h2>
      <p className="mt-1 text-lg font-bold text-amber-800">{menu.price}원</p>
      <p className="mt-3 text-stone-600">{menu.desc}</p>
      <div className="mt-6 flex items-center gap-3">
        <Button onClick={() => onAdd(menu)}>담기</Button>
        <Link to="/" className="text-sm text-stone-600 hover:underline">
          메뉴로
        </Link>
      </div>
    </article>
  );
}

export default MenuDetailPage;
