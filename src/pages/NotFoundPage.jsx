import { Link } from "react-router";

// 없는 주소(*)
function NotFoundPage() {
  return (
    <section>
      <h2>없는 페이지입니다</h2>
      <Link to="/">메뉴로</Link>
    </section>
  );
}

export default NotFoundPage;
