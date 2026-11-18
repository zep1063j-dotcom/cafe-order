import { Link } from "react-router";
import Button from "./Button.jsx";

// 메뉴 카드 하나 — 모양은 Tailwind 클래스로(CSS 파일 없음)
function MenuCard({ id, name, price, desc = "오늘의 메뉴", onAdd }) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-stone-200 hover:shadow-md">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="mt-1 font-bold text-amber-800">{price}원</p>
      <p className="mt-2 text-sm text-stone-500">{desc}</p>
      <div className="mt-4 flex items-center gap-3">
        <Button onClick={onAdd}>담기</Button>
        <Link to={`/menu/${id}`} className="text-sm text-stone-600 hover:underline">
          자세히
        </Link>
      </div>
    </article>
  );
}

export default MenuCard;
