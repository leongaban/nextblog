import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="nav flex flex-row m-5">
      <div className="">
        <Link href="/">BLOG</Link>
      </div>
      <div className="absolute right-5">
        <Link href="/login" className="mr-2">
          Login
        </Link>
        <Link href="/register">Register</Link>
      </div>
    </nav>
  );
}
