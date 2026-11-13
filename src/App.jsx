import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import MenuCard from "./components/MenuCard.jsx";
import Footer from "./components/Footer.jsx";
import { menus, categories } from "./data/menus.js";

function App() {
  const [category, setCategory] = useState("전체"); // 고른 분류
  const [keyword, setKeyword] = useState(""); // 찾는 글자 — 입력 칸과 이어진 state
  const [cart, setCart] = useState([]); // 담은 메뉴들

  useEffect(() => {
    document.title = cart.length > 0 ? `(${cart.length}) 오즈 카페` : "오즈 카페";
  }, [cart.length]);

  // 보여 줄 메뉴는 state로 두지 않고 그릴 때마다 계산합니다
  const visibleMenus = menus.TODO 1(
    (menu) =>
      (category === "전체" || menu.category === category) && menu.name.includes(keyword),
  );

  function handleAdd(menu) {
    setCart([TODO 3cart, menu]); // 배열 state는 새 배열로 바꿉니다
  }

  return (
    <>
      <Header count={cart.length} />
      <main>
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
          value={TODO 6}
          onChange={(e) => setKeyword(e.target.TODO 2)}
          placeholder="메뉴 이름으로 찾기"
        />
        {visibleMenus.length === 0 ? (
          <p>찾는 메뉴가 없어요</p>
        ) : (
          <div className="menu-list">
            {visibleMenus.TODO 4((menu) => (
              <MenuCard
                key={TODO 5}
                name={menu.name}
                price={menu.price}
                desc={menu.desc}
                onAdd={() => handleAdd(menu)}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
