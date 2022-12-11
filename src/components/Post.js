import { storyblokEditable } from "@storyblok/js";
import Link from "next/link";
const PostPage = ({ blok, ...rest }) => {
  let title = blok?.title ?? rest?.name;
  let { created_at, published_at } = rest;
  let { content, Categories, Tags } = blok;
  let editable = blok?._editable ? storyblokEditable(blok) : {};

  return (
    <main {...editable} className="max-w-screen-md mx-auto prose">
      <h1>{title}</h1>
      <p>created_at: {created_at}</p>
      <p>published_at: {published_at}</p>
      <div className="categories border-b pb-4">
        <p className="text-2xl font-bold">Categories</p>
        <Link href={`/${Categories?.fullSlug}`}>{Categories?.name}</Link>
      </div>
      <div className="tags border-b pb-4">
        <p className="text-2xl font-bold">Tags</p>
        <div className="flex space-x-4">
          {Tags?.map((tag) => (
            <Link key={tag?.id} href={`/${tag?.fullSlug}`}>
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
