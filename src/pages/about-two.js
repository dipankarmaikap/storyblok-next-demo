import { useStoryblokState } from "@storyblok/react";
import getStoryPageData from "~/storyblok/getStoryBlokData";
import StoryblokComponent from "~/storyblok/StoryblokComponent";
import { isPreviewEnv } from "~/utils/variables";

const resolveRelations = ["FeaturedPostsSection.posts"];

export default function Home({ story }) {
  if (isPreviewEnv) {
    story = useStoryblokState(story, {
      resolveRelations,
    });
  }
  return (
    <div>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps() {
  let path = "home";
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
