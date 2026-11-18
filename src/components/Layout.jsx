import { Outlet } from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// 모든 페이지의 틀 — 머리말과 꼬리말은 그대로, 가운데(Outlet)만 주소에 따라 바뀝니다
function Layout({ count }) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <Header count={count} />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
