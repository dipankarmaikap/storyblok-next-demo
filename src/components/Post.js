import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import StoryblokComponent from "~/storyblok/StoryblokComponent";

const PostPage = ({ blok, ...rest }) => {
  let title = blok?.title ?? rest?.name;
  let { created_at, published_at } = rest;
  let { content, Categories, Tags } = blok;
  return (
    <main
      {...storyblokEditable(blok)}
      className="max-w-screen-md mx-auto prose"
    >
      <h1>{title}</h1>
      <p>created_at: {created_at}</p>
      <p>published_at: {published_at}</p>
      <div className="categories border-b pb-4">
        <p className="text-2xl font-bold">Categories</p>
        <Link href={`/${Categories?.full_slug}`}>{Categories?.name}</Link>
      </div>
      <div className="tags border-b pb-4">
        <p className="text-2xl font-bold">Tags</p>
        <div className="flex space-x-4">
          {Tags?.map((tag) => (
            <Link key={tag?.uuid} href={`/${tag?.full_slug}`}>
              {tag?.name}
            </Link>
          ))}
        </div>
      </div>
      <pre className="whitespace-pre-wrap">{content}</pre>
    </main>
  );
};

export default PostPage;
