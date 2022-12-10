import { getStoryblokApi, useStoryblokState } from "@storyblok/react";
import initStoryblok from "~/storyblok/initStoryblok";
import { isPreviewEnv, storyblokAcessKey } from "~/utils/variables";
import StoryblokComponent from "~/storyblok/StoryblokComponent";

const resolveRelations = [
  "FeaturedPostsSection.posts",
  "Post.Categories",
  "Post.Tags",
];

export default function CatchAllRoute({ story }) {
  if (isPreviewEnv) {
    story = useStoryblokState(story, {
      resolveRelations,
    });
  }
  let { content, ...rest } = story;
  return (
    <div>
      <StoryblokComponent blok={story.content} {...rest} />
    </div>
  );
}
export async function getStaticProps({ params: { slug } }) {
  let path = slug ? slug?.join("/") : "home";
  initStoryblok(storyblokAcessKey);
  let sbParams = {
    version: isPreviewEnv ? "draft" : "published", // or 'published'
    resolve_relations: resolveRelations,
  };
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${path}`, sbParams);
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
