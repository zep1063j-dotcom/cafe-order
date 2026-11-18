import { useState } from "react";
import MenuCard from "../components/MenuCard.jsx";
import { menus, categories } from "../data/menus.js";

// 분류 단추 — 고른 것과 아닌 것의 클래스를 통째로 적어 둡니다
const chipOn = "rounded-full bg-amber-700 px-4 py-1.5 text-sm font-bold text-white";
const chipOff =
  "rounded-full bg-white px-4 py-1.5 text-sm text-stone-600 ring-1 ring-stone-300 hover:bg-stone-100";
// 찾기 칸 — focus:는 칸을 골랐을 때
const inputClass =
  "mb-6 w-full max-w-xs rounded-lg border border-stone-300 bg-white px-3 py-2 " +
  "focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-200";

// 메뉴(/) — 분류와 찾는 글자로 거른 메뉴 목록
function MenuPage({ onAdd }) {
  const [category, setCategory] = useState("전체");
  const [keyword, setKeyword] = useState("");

  const visibleMenus = menus.filter(
    (menu) =>
      (category === "전체" || menu.category === category) && menu.name.includes(keyword),
  );

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">메뉴</h2>
      <div className="mb-3 flex flex-wrap gap-2">
        {categories.map((name) => (
          <button
            key={name}
            type="button"
            className={category === name ? chipOn : chipOff}
            onClick={() => setCategory(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <input
        className={inputClass}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="메뉴 이름으로 찾기"
      />
      {visibleMenus.length === 0 ? (
        <p className="text-stone-500">찾는 메뉴가 없어요</p>
      ) : (
        // 좁은 화면 한 칸 → 640px 이상 두 칸 → 1024px 이상 세 칸
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleMenus.map((menu) => (
            <MenuCard
              key={menu.id}
              id={menu.id}
              name={menu.name}
              price={menu.price}
              desc={menu.desc}
              onAdd={() => onAdd(menu)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default MenuPage;
