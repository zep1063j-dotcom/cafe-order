import { useState } from "react";
import { Link } from "react-router";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.js";
import Button from "../components/Button.jsx";

// 장바구니(/cart) — 「주문하기」를 누르면 Firestore의 users/{내 uid}/orders에 주문 문서를 더합니다
function CartPage({ cart, user, onRemove, onClear }) {
  const [message, setMessage] = useState("");
  const total = cart.reduce((sum, menu) => sum + menu.price, 0);

  function handleOrder() {
    TODO 2(collection(db, "users", user.uid, "orders"), {
      items: cart.map((menu) => menu.name),
      total,
      createdAt: TODO 3(),
    })
      .then(() => {
        onClear(); // 주문했으면 장바구니를 비움
        setMessage("주문했어요. 내 주문에서 볼 수 있어요.");
      })
      .catch((error) => setMessage(error.code));
  }

  if (cart.length === 0) {
    return (
      <section>
        <h2 className="mb-4 text-xl font-bold">장바구니</h2>
        <p className="text-stone-500">담은 메뉴가 없어요</p>
        {message && <p className="mt-3 text-sm text-stone-600">{message}</p>}
      </section>
    );
  }

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">장바구니</h2>
      <ul className="divide-y divide-stone-200 rounded-2xl bg-white ring-1 ring-stone-200">
        {cart.map((menu, index) => (
          <li key={index} className="flex items-center justify-between gap-3 px-5 py-3">
            <span>
              {menu.name} {menu.price}원
            </span>
            <Button variant="outline" onClick={() => onRemove(index)}>
              빼기
            </Button>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-lg font-bold">합계 {total}원</p>
      <div className="mt-4">
        {user ? (
          <Button onClick={handleOrder}>주문하기</Button>
        ) : (
          <p className="text-stone-600">
            주문하려면{" "}
            <Link to="/login" className="font-bold text-amber-700 hover:underline">
              로그인
            </Link>
            하세요
          </p>
        )}
      </div>
      {message && <p className="mt-3 text-sm text-red-600">{message}</p>}
    </section>
  );
}

export default CartPage;
