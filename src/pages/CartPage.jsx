// 장바구니(/cart) — 담은 메뉴와 합계, 「빼기」
function CartPage({ cart, onRemove }) {
  const total = cart.reduce((sum, menu) => sum + menu.price, 0);

  if (cart.length === 0) {
    return (
      <section>
        <h2>장바구니</h2>
        <p>담은 메뉴가 없어요</p>
      </section>
    );
  }

  return (
    <section>
      <h2>장바구니</h2>
      <ul className="cart-list">
        {cart.map((menu, index) => (
          <li key={index}>
            <span>
              {menu.name} {menu.price}원
            </span>
            <button type="button" onClick={() => onRemove(index)}>
              빼기
            </button>
          </li>
        ))}
      </ul>
      <p>합계 {total}원</p>
    </section>
  );
}

export default CartPage;
