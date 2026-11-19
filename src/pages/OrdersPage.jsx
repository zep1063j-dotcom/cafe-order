import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase.js";
import Button from "../components/Button.jsx";

// 내 주문(/orders) — 내 주문 문서를 듣고(onSnapshot), 「주문 취소」로 지웁니다
function OrdersPage({ user }) {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const q = query(collection(db, "users", user.uid, "orders"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setOrders(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
      },
      (error) => setMessage(error.code),
    );
    return unsubscribe; // 화면에서 사라지면 듣기를 멈춤
  }, [user.uid]);

  function cancelOrder(order) {
    const ref = doc(db, "users", user.uid, "orders", order.id);
    deleteDoc(ref).catch((error) => setMessage(error.code));
  }

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">내 주문</h2>
      {message && <p className="mb-3 text-sm text-red-600">{message}</p>}
      {orders.length === 0 ? (
        <p className="text-stone-500">아직 주문이 없어요</p>
      ) : (
        <ul className="divide-y divide-stone-200 rounded-2xl bg-white ring-1 ring-stone-200">
          {orders.map((order) => (
            <li key={order.id} className="flex items-center justify-between gap-3 px-5 py-3">
              <span>
                {order.items.join(", ")} — {order.total}원
              </span>
              <Button variant="outline" onClick={() => cancelOrder(order)}>
                주문 취소
              </Button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default OrdersPage;
