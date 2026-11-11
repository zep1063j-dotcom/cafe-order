import Header from "./components/Header.jsx";
import MenuCard from "./components/TODO 5";
import Footer from "./components/Footer.jsx";

// 메뉴판 — 카드 컴포넌트 하나를 props만 바꿔 네 번 씁니다
function App() {
  return (
    <>
      <Header />
      <main>
        <h2>메뉴</h2>
        <div className="menu-list">
          <MenuCard name="아메리카노" price={TODO 6} desc="깊고 고소한 기본 커피" />
          <MenuCard name="카페 라테" price={4500} desc="우유를 넉넉히 넣은 커피" />
          <MenuCard name="자몽 에이드" price={5000} desc="상큼한 자몽과 탄산" />
          <MenuCard name="소금빵" price={3500} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
