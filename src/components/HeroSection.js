/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="border-b border-gray-700 py-8 lg:py-16 px-6">
      <div className="max-w-screen-lg mx-auto text-center">
        <p className="font-serif font-semibold">Dipankar Maikap</p>
        <h1 className="text-7xl lg:text-9xl font-black my-8">Hello World</h1>
        <p className="text-xl lg:text-3xl font-serif leading-relaxed my-8">
          I am a web developer with 4+ year's experience. I love web development
          and javascript. I also like to write about web development in my blog.
        </p>
        <Link href="/projects">
          <a className="uppercase font-bold text-lg lg:text-xl underline">
            My Projects
          </a>
        </Link>
      </div>
    </section>
  );
}
