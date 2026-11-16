import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import MenuDetailPage from "./pages/MenuDetailPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

// 담은 메뉴는 페이지를 옮겨 다녀도 남도록, 라우트 바깥의 App이 기억합니다
function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    document.title = cart.length > 0 ? `(${cart.length}) 오즈 카페` : "오즈 카페";
  }, [cart.length]);

  function handleAdd(menu) {
    setCart([...cart, menu]);
  }

  function handleRemove(index) {
    setCart(cart.filter((_, i) => i !== index)); // 그 번호만 빼고 새 배열
  }

  return (
    <Routes>
      {/* 모든 페이지가 Layout(머리말 · 꼬리말) 안에 그려집니다 */}
      <Route element={<Layout count={cart.length} />}>
        <Route index element={<MenuPage onAdd={handleAdd} />} />
        <Route path="menu/:id" element={<MenuDetailPage onAdd={handleAdd} />} />
        <Route path="cart" element={<CartPage cart={cart} onRemove={handleRemove} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
