/* eslint-disable react/no-unescaped-entities */
import { storyblokEditable } from "@storyblok/react";

import Link from "next/link";

export default function HeroSection({ blok }) {
  let { title, subtitle, description, link } = blok;
  return (
    <section className="border-b border-gray-700 py-8 lg:py-16 px-6">
      <div
        {...storyblokEditable(blok)}
        className="max-w-screen-lg mx-auto text-center"
      >
        <p className="font-serif font-semibold">{subtitle}</p>
        <h1 className="text-7xl lg:text-9xl font-black my-8">{title}</h1>
        <p className="text-xl lg:text-3xl font-serif leading-relaxed my-8">
          {description}
        </p>
        <Link href={link?.url ?? "/"}>
          <a className="uppercase font-bold text-lg lg:text-xl underline">
            My Projects
          </a>
        </Link>
      </div>
    </section>
  );
}
