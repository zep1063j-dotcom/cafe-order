import { Navigate, Outlet } from "react-router";

// 로그인해야 들어가는 라우트를 감쌉니다 — Firebase가 확인을 마칠 때까지 기다립니다
function PrivateRoute({ user, checking }) {
  if (TODO 3) {
    // 새로고침 직후에는 user가 잠깐 null — 확인이 끝나기 전에는 /login으로 보내지 않습니다
    return <p className="text-stone-500">로그인 상태를 확인하는 중…</p>;
  }
  if (!user) {
    return <TODO 4 to="/login" replace />;
  }
  return <Outlet />;
}

export default PrivateRoute;
