import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import Layout from "./components/Layout.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import MenuDetailPage from "./pages/MenuDetailPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null); // 로그인한 사람 — 없으면 null
  const [checking, setChecking] = useState(true); // 처음에 로그인 상태를 확인하는 중

  useEffect(() => {
    document.title = cart.length > 0 ? `(${cart.length}) 오즈 카페` : "오즈 카페";
  }, [cart.length]);

  useEffect(() => {
    // 로그인 상태가 정해지거나 바뀔 때마다 불림 — 처음 한 번, 로그인 · 로그아웃할 때
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setChecking(false);
    });
    return unsubscribe; // 화면에서 사라지면 듣기를 멈춤
  }, []);

  function handleAdd(menu) {
    setCart([...cart, menu]);
  }

  function handleRemove(index) {
    setCart(cart.filter((_, i) => i !== index));
  }

  function handleClear() {
    setCart([]);
  }

  return (
    <Routes>
      <Route element={<Layout count={cart.length} user={user} />}>
        <Route index element={<MenuPage onAdd={handleAdd} />} />
        <Route path="menu/:id" element={<MenuDetailPage onAdd={handleAdd} />} />
        <Route path="cart" element={<CartPage cart={cart} user={user} onRemove={handleRemove} onClear={handleClear} />} />
        <Route path="login" element={<LoginPage user={user} checking={checking} />} />
        {/* 로그인해야 들어가는 페이지 */}
        <Route element={<PrivateRoute user={user} checking={checking} />}>
          <Route path="orders" element={<OrdersPage user={user} />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
