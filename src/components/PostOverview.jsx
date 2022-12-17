import { storyblokEditable } from "@storyblok/js";
import { PostItem } from "./FeaturedPostsSection";

const PostOverview = ({ blok, ...rest }) => {
  let editable = blok?._editable ? storyblokEditable(blok) : {};
  let { title } = blok;
  let { posts } = rest;

  return (
    <main>
      <div {...editable} className="title">
        <p className="p-6 font-serif text-lg">{title}</p>
      </div>
      <div className="paginated-posts">
        {posts?.map((post) => (
          <PostItem post={post} key={post.uuid} />
        ))}
      </div>
    </main>
  );
};

export default PostOverview;
