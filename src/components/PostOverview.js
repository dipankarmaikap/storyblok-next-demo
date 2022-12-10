import { storyblokEditable } from "@storyblok/react";
import { PostItem } from "./FeaturedPostsSection";

const PostOverview = ({ blok, ...rest }) => {
  let title = blok?.title ?? rest?.name;
  let { created_at, published_at, posts } = rest;
  let { per_page_post } = blok;
  let editable = blok?._editable ? storyblokEditable(blok) : {};

  return (
    <main {...editable} className="">
      <h1>{title}</h1>
      <p>created_at: {created_at}</p>
      <p>published_at: {published_at}</p>
      <p>per_page_post: {per_page_post}</p>
      <div className="list-of-posts">
        {posts?.map((post) => (
          <PostItem key={post.uuid} post={post} />
        ))}
      </div>
    </main>
  );
};

export default PostOverview;
