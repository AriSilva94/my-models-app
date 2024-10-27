import Link from "next/link";

export function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <Link href="/">
        <h1 className="text-3xl font-bold text-center">Models Showcase</h1>
      </Link>
    </header>
  );
}
