import { getStoryblokApi, useStoryblokState } from "@storyblok/react";
import initStoryblok from "~/storyblok/initStoryblok";
import StoryblokComponent from "~/storyblok/StoryblokComponent";
import { isPreviewEnv, storyblokAcessKey } from "~/utils/variables";

const resolveRelations = ["FeaturedPostsSection.posts"];

export default function Home({ story }) {
  if (isPreviewEnv) {
    // console.log("running useStoryblokState on client");
    story = useStoryblokState(story, {
      resolveRelations,
    });
  }
  return (
    <div>
      <StoryblokComponent blok={story.content} />
      {/* <StoryblokComponent blok={story.content} /> */}
    </div>
  );
}

export async function getStaticProps() {
  initStoryblok(storyblokAcessKey);

  let slug = "home";
  let sbParams = {
    version: isPreviewEnv ? "draft" : "published", // or 'published'
    resolve_relations: resolveRelations,
  };
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
