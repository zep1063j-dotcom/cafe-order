import Button from "../components/Button.jsx";

// 장바구니(/cart) — 담은 메뉴와 합계, 「빼기」
function CartPage({ cart, onRemove }) {
  const total = cart.reduce((sum, menu) => sum + menu.price, 0);

  if (cart.length === 0) {
    return (
      <section>
        <h2 className="mb-4 text-xl font-bold">장바구니</h2>
        <p className="text-stone-500">담은 메뉴가 없어요</p>
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
    </section>
  );
}

export default CartPage;
