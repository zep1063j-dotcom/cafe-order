import { useState } from "react";
import { Navigate } from "react-router";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import Button from "../components/Button.jsx";

// 입력 칸 둘이 함께 쓰는 클래스 — 긴 클래스는 변수에 담아 나눠 적습니다
const inputClass =
  "block w-full rounded-lg border border-stone-300 bg-white px-3 py-2 " +
  "focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-200";

// 로그인(/login) — 이메일과 비밀번호로 회원가입 · 로그인
function LoginPage({ user, checking }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // 실패했을 때의 오류 코드

  if (checking) {
    return <p className="text-stone-500">로그인 상태를 확인하는 중…</p>;
  }
  if (user) {
    return <Navigate to="/" replace />; // 이미 로그인했으면 메뉴로
  }

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).catch((error) => setMessage(error.code));
  }

  function handleSignUp() {
    createUserWithEmailAndPassword(auth, email, password).catch((error) => setMessage(error.code));
  }

  return (
    <section className="mx-auto max-w-sm rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
      <h2 className="mb-4 text-xl font-bold">로그인</h2>
      <form onSubmit={handleLogin} className="grid gap-3">
        <input
          type="email"
          className={inputClass}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
        />
        <input
          type="password"
          className={inputClass}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호 (6자 이상)"
        />
        <Button type="submit">로그인</Button>
        <Button variant="outline" onClick={handleSignUp}>
          회원가입
        </Button>
      </form>
      {message && <p className="mt-3 text-sm text-red-600">{message}</p>}
    </section>
  );
}

export default LoginPage;
