import Link from "next/link";
import { storyblokEditable } from "@storyblok/js";
export default function FeaturedPostsSection({ blok }) {
  let { title, posts } = blok;

  let editable = blok?._editable ? storyblokEditable(blok) : {};
  return (
    <section {...editable} className="my-8">
      <p className="p-6 font-serif text-lg">{title}</p>
      <div className="featured-posts">
        {posts.map((post) => (
          <PostItem post={post} key={post.uuid} />
        ))}
      </div>
    </section>
  );
}

export function PostItem({ post }) {
  return (
    <article className="border-b border-gray-700 px-6 py-4 lg:p-6">
      <h2>
        <Link
          href={`/${post?.full_slug}` ?? "/"}
          className="post text-5xl lg:text-7xl font-black"
        >
          {post?.name}
        </Link>
      </h2>
    </article>
  );
}
