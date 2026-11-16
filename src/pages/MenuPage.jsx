import { useState } from "react";
import MenuCard from "../components/MenuCard.jsx";
import { menus, categories } from "../data/menus.js";

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
      <h2>메뉴</h2>
        <div className="filters">
          {categories.map((name) => (
            <button
              key={name}
              type="button"
              className={category === name ? "active" : ""}
              onClick={() => setCategory(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <input
          className="search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="메뉴 이름으로 찾기"
        />
      {visibleMenus.length === 0 ? (
        <p>찾는 메뉴가 없어요</p>
      ) : (
        <div className="menu-list">
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
