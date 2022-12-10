import { useStoryblokState } from "@storyblok/react";
import { isPreviewEnv } from "~/utils/variables";
import StoryblokComponent from "~/storyblok/StoryblokComponent";
import getStoryPageData from "~/storyblok/getStoryBlokData";

const resolveRelations = ["Post.Categories", "Post.Tags"];

export default function PostsPage({ story }) {
  if (isPreviewEnv) {
    story = useStoryblokState(story, {
      resolveRelations,
    });
  }
  let { content, ...rest } = story;
  return (
    <div className="article-page">
      <StoryblokComponent blok={story.content} {...rest} />
    </div>
  );
}
export async function getStaticProps({ params: { slug } }) {
  let path = `posts/${slug}`;
  let data = await getStoryPageData({
    path,
    resolveRelations,
  });
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
