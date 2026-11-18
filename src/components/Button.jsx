// 버튼 — 담기 · 빼기 · 주문하기 · 로그인이 함께 쓰는 모양을 한곳에 모은 컴포넌트
// variant별 클래스는 통째로 적어 둡니다(클래스 이름을 이어 만들면 CSS가 생기지 않음)
const variants = {
  primary: "bg-amber-700 text-white TODO 6:bg-amber-800",
  outline: "bg-white text-stone-700 ring-1 ring-stone-300 hover:bg-stone-100",
};

function Button({ children, onClick, type = "button", variant = "primary" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg px-4 py-2 text-sm font-bold ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
