import { Outlet } from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// 모든 페이지의 틀 — user는 App → Layout → Header로 내려갑니다
function Layout({ count, user }) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <Header count={count} user={user} />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
