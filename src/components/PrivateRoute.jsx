import { Navigate, Outlet } from "react-router";

// 로그인해야 들어갈 수 있는 라우트를 감쌉니다 — 로그인하지 않았으면 /login으로 보냅니다
function PrivateRoute({ user }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default PrivateRoute;
