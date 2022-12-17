import Link from "next/link";
export default function Header() {
  return (
    <header className="border-b border-gray-700 p-6">
      <div className="flex flex-wrap justify-between">
        <Link href="/" className="text-2xl block font-bold">
          Portfolio
        </Link>
        <nav className="flex space-x-4 text-lg font-serif">
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
