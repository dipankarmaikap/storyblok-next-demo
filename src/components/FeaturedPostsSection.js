import Link from "next/link";

export default function FeaturedPostsSection() {
  let posts = [
    "Generating sitemap for a Storyblok + Next.js site",
    "Headless WordPress and SEO",
    "How to add an RSS feed to your Next.js WordPress site",
  ];

  return (
    <section className="my-8">
      <p className="p-6 font-serif text-lg">Recent posts</p>
      <div className="recent-posts">
        {posts.map((post) => (
          <article
            className="border-b border-gray-700 px-6 py-4 lg:p-6"
            key={post}
          >
            <h2>
              <Link href="/">
                <a className="post text-5xl lg:text-7xl font-black">{post}</a>
              </Link>
            </h2>
          </article>
        ))}
      </div>
    </section>
  );
}
