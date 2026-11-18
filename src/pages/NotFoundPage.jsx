import { Link } from "react-router";

// 없는 주소(*)
function NotFoundPage() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-xl font-bold">없는 페이지입니다</h2>
      <Link to="/" className="mt-4 inline-block text-amber-700 hover:underline">
        메뉴로
      </Link>
    </section>
  );
}

export default NotFoundPage;
