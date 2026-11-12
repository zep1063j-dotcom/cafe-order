import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import MenuCard from "./components/MenuCard.jsx";
import Footer from "./components/Footer.jsx";

// 담은 개수는 App이 state로 기억하고 Header와 MenuCard에 props로 내려보냅니다
function App() {
  const [count, setCount] = TODO 1(0);

  // 담은 개수가 바뀔 때마다 브라우저 탭의 제목을 바꿉니다(사이드 이펙트)
  TODO 2(() => {
    document.title = count > 0 ? `(${count}) 오즈 카페` : "오즈 카페";
  }, [TODO 3]);

  function handleAdd() {
    TODO 4(count + 1);
  }

  return (
    <>
      <Header TODO 5={count} />
      <main>
        <h2>메뉴</h2>
        <div className="menu-list">
          <MenuCard name="아메리카노" price={4000} desc="깊고 고소한 기본 커피" onAdd={handleAdd} />
          <MenuCard name="카페 라테" price={4500} desc="우유를 넉넉히 넣은 커피" onAdd={handleAdd} />
          <MenuCard name="자몽 에이드" price={5000} desc="상큼한 자몽과 탄산" onAdd={handleAdd} />
          <MenuCard name="소금빵" price={3500} onAdd={handleAdd} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
