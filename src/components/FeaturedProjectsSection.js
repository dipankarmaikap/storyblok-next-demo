/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function FeaturedProjectsSection() {
  let posts = [
    "Inside ‘The Fisherman’",
    "Deliciously Healthy",
    "Our Wine Tasting Trip in Valle d’Aosta",
  ];
  return (
    <section id="projects" className="my-8 p-6">
      <p className="font-serif text-lg">Featured projects</p>
      <div className="featured-projects my-8 grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post} className="group relative">
            <img
              src="https://vivredemo.files.wordpress.com/2022/07/sundae-1.png"
              alt=""
            />
            <h2 className="mt-2">
              <Link href="/">
                <a className="post text-2xl font-bold">{post}</a>
              </Link>
            </h2>
          </article>
        ))}
      </div>
    </section>
  );
}
