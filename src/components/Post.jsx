import { storyblokEditable } from "@storyblok/js";
import RichTextResolver from "storyblok-js-client/richTextResolver";
import Link from "next/link";
import Author from "./Author";
const PostPage = ({ blok, ...rest }) => {
  let title = blok?.title ?? rest?.name;
  let { published_at } = rest;
  let { content, description, Categories, Tags } = blok;
  let editable = blok?._editable ? storyblokEditable(blok) : {};
  const resolver = new RichTextResolver();
  let body = resolver.render(content);
  return (
    <main {...editable} className="max-w-[800px] mx-auto p-4">
      <article className="prose prose-lg sm:prose-xl max-w-none prose-h1:my-0 sm:prose-h1:my-0">
        <div className="text-center flex flex-col items-center">
          <Link
            className="no-underline text-lg my-4"
            href={`/${Categories?.full_slug}`}
          >
            {Categories?.name}
          </Link>
          <h1>{title}</h1>
          <div className="my-2 sm:my-4">
            <p className="leading-snug">{description}</p>
          </div>
          <Author published_at={published_at} />
        </div>
        <div
          className="border-b mt-12"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {Tags?.length ? (
          <div className="tags border-b flex items-center space-x-2 not-prose py-4">
            <p className="font-medium">Posted in tags: </p>
            <div className="flex space-x-1">
              {Tags?.map((tag, index) => (
                <span key={tag?.id}>
                  <Link
                    className="no-underline text-base font-normal"
                    href={`/${tag?.full_slug}`}
                  >
                    {tag?.name}
                  </Link>
                  {index < Tags?.length - 1 && <span>,</span>}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </article>
    </main>
  );
};

export default PostPage;
