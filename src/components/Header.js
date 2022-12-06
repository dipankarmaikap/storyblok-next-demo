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
          <Link href="/blogs">Blogs</Link>
          <Link href="/projects">Projects</Link>
        </nav>
      </div>
    </header>
  );
}
