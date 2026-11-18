// 내 주문(/orders) — 로그인해야 들어옵니다. 주문 목록은 DAY 34에 채웁니다
function OrdersPage({ user }) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">내 주문</h2>
      <p className="text-stone-600">{user.email}님의 주문은 DAY 34부터 여기에 보입니다.</p>
    </section>
  );
}

export default OrdersPage;
